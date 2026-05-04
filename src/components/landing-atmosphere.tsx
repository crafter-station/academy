"use client";

import { useEffect, useRef } from "react";

type AtmosphereVariant = "background" | "showcase";

const VARIANT_CONFIG = {
  background: {
    count: 520,
    dprCap: 1.4,
    pointBase: 1.4,
    pointRange: 3.8,
    alpha: 0.52,
    drift: 0.028,
  },
  showcase: {
    count: 1100,
    dprCap: 1.8,
    pointBase: 2.2,
    pointRange: 7.2,
    alpha: 0.92,
    drift: 0.055,
  },
} as const;

const VERTEX_SHADER = `
precision highp float;

attribute vec2 a_position;
attribute float a_size;
attribute float a_seed;

uniform float u_time;
uniform float u_drift;
uniform float u_dpr;

varying float v_seed;
varying vec2 v_position;

void main() {
  float waveX = sin((a_position.y * 3.4) + (u_time * 0.12) + (a_seed * 6.28318));
  float waveY = cos((a_position.x * 2.8) + (u_time * 0.10) + (a_seed * 5.1));
  vec2 position = a_position + vec2(waveX, waveY) * u_drift;

  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = a_size * u_dpr;
  v_seed = a_seed;
  v_position = position;
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform float u_time;
uniform float u_alpha;

varying float v_seed;
varying vec2 v_position;

void main() {
  vec2 point = gl_PointCoord - 0.5;
  float distanceFromCenter = length(point);
  float particle = smoothstep(0.5, 0.0, distanceFromCenter);
  float aura = smoothstep(0.5, 0.0, distanceFromCenter) * smoothstep(0.0, 0.42, distanceFromCenter);
  float pulse = 0.62 + (0.38 * sin((u_time * 0.16) + (v_seed * 14.0)));
  float band = fract((v_seed * 2.9) + (v_position.x * 0.18) + (u_time * 0.018));
  float signal = step(0.986, fract(v_seed * 43.0));

  vec3 blue = vec3(0.34, 0.55, 1.0);
  vec3 violet = vec3(0.54, 0.36, 0.96);
  vec3 cyan = vec3(0.33, 0.92, 0.83);
  vec3 coral = vec3(1.0, 0.35, 0.24);

  vec3 color = mix(blue, violet, smoothstep(0.0, 0.64, band));
  color = mix(color, cyan, smoothstep(0.58, 1.0, band) * 0.38);
  color = mix(color, coral, signal * 0.62);

  float alpha = ((particle * 0.24) + (aura * 0.16)) * pulse * u_alpha;
  alpha += signal * particle * 0.12 * u_alpha;
  gl_FragColor = vec4(color, alpha);
}
`;

function compileShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
) {
  const shader = gl.createShader(type);

  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

  if (!vertexShader || !fragmentShader) {
    if (vertexShader) {
      gl.deleteShader(vertexShader);
    }

    if (fragmentShader) {
      gl.deleteShader(fragmentShader);
    }

    return null;
  }

  const program = gl.createProgram();

  if (!program) {
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function seededRandom(seed: number) {
  return Math.abs(Math.sin(seed * 12.9898) * 43_758.5453) % 1;
}

function createParticleData(
  count: number,
  pointBase: number,
  pointRange: number,
) {
  const data = new Float32Array(count * 4);

  for (let index = 0; index < count; index += 1) {
    const seed = seededRandom(index + 1);
    const depth = seededRandom(index + 211);
    const radius = Math.sqrt(seededRandom(index + 97));
    const angle = seededRandom(index + 31) * Math.PI * 2;
    const x = Math.cos(angle) * radius * 1.22;
    const y = Math.sin(angle) * radius * 1.05;

    data[index * 4] = x;
    data[index * 4 + 1] = y;
    data[index * 4 + 2] = pointBase + depth * pointRange;
    data[index * 4 + 3] = seed;
  }

  return data;
}

export function LandingAtmosphere({
  className = "",
  variant = "background",
}: {
  className?: string;
  variant?: AtmosphereVariant;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const config = VARIANT_CONFIG[variant];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
      premultipliedAlpha: true,
      stencil: false,
    });

    if (!gl) {
      canvas.dataset.webgl = "unavailable";
      return;
    }

    const program = createProgram(gl);

    if (!program) {
      canvas.dataset.webgl = "unavailable";
      return;
    }

    const buffer = gl.createBuffer();

    if (!buffer) {
      gl.deleteProgram(program);
      return;
    }

    canvas.dataset.webgl = "ready";

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const sizeLocation = gl.getAttribLocation(program, "a_size");
    const seedLocation = gl.getAttribLocation(program, "a_seed");
    const timeLocation = gl.getUniformLocation(program, "u_time");
    const alphaLocation = gl.getUniformLocation(program, "u_alpha");
    const driftLocation = gl.getUniformLocation(program, "u_drift");
    const dprLocation = gl.getUniformLocation(program, "u_dpr");
    const particleData = createParticleData(
      config.count,
      config.pointBase,
      config.pointRange,
    );
    const stride = 4 * Float32Array.BYTES_PER_ELEMENT;
    const activateProgram = gl.useProgram.bind(gl);
    let animationFrame = 0;
    let pixelRatio = 1;
    let startedAt = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      pixelRatio = Math.min(window.devicePixelRatio || 1, config.dprCap);
      const width = Math.max(1, Math.floor(rect.width * pixelRatio));
      const height = Math.max(1, Math.floor(rect.height * pixelRatio));

      if (canvas.width === width && canvas.height === height) {
        return;
      }

      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    };

    const render = (timestamp: number) => {
      resize();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      activateProgram(program);
      gl.uniform1f(timeLocation, (timestamp - startedAt) / 1000);
      gl.uniform1f(alphaLocation, config.alpha);
      gl.uniform1f(driftLocation, reducedMotion.matches ? 0 : config.drift);
      gl.uniform1f(dprLocation, pixelRatio);
      gl.drawArrays(gl.POINTS, 0, config.count);

      if (!reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(render);
      } else {
        animationFrame = 0;
      }
    };

    const start = () => {
      if (animationFrame || document.hidden) {
        return;
      }

      startedAt = performance.now();
      animationFrame = window.requestAnimationFrame(render);
    };

    const stop = () => {
      if (!animationFrame) {
        return;
      }

      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const handleVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    const handleMotionChange = () => {
      stop();
      render(startedAt);

      if (!reducedMotion.matches) {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(resize);

    resize();
    resizeObserver.observe(canvas);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, particleData, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(sizeLocation);
    gl.vertexAttribPointer(
      sizeLocation,
      1,
      gl.FLOAT,
      false,
      stride,
      2 * Float32Array.BYTES_PER_ELEMENT,
    );
    gl.enableVertexAttribArray(seedLocation);
    gl.vertexAttribPointer(
      seedLocation,
      1,
      gl.FLOAT,
      false,
      stride,
      3 * Float32Array.BYTES_PER_ELEMENT,
    );
    render(startedAt);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", handleMotionChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, [variant]);

  return (
    <canvas
      className={`pointer-events-none ${className}`}
      data-atmosphere={variant}
      ref={canvasRef}
    />
  );
}

export function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const progress = progressRef.current;

    if (!progress) {
      return;
    }

    const updateProgress = () => {
      const scrollable = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const scale = Math.min(1, Math.max(0, window.scrollY / scrollable));

      progress.style.transform = `scaleX(${scale})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-0.5 w-full origin-left scale-x-0 bg-[var(--accent)]"
      ref={progressRef}
    />
  );
}
