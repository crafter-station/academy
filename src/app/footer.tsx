type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
};

const footerLinkGroups: { title: string; links: FooterLink[] }[] = [
  {
    title: "Program",
    links: [
      { label: "Curriculum", href: "/syllabus" },
      { label: "Team", href: "/#team" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      {
        label: "Crafter Station",
        href: "https://crafterstation.com",
        external: true,
      },
      {
        label: "Crafter Research",
        href: "https://research.crafter.ing/",
        external: true,
      },
      { label: "Kebo", href: "#", disabled: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-[#e5e5e5] pt-12 sm:grid-cols-[1.15fr_2fr] sm:gap-16 lg:pt-16">
        <div className="flex flex-col justify-between gap-10">
          <div>
            {/* biome-ignore lint/performance/noImgElement: Local SVG brand mark is already optimized. */}
            <img
              alt="Crafter Academy"
              className="h-8 w-auto"
              src="/brand/logo-black.svg"
            />
            <p className="mt-6 max-w-sm text-base leading-7 text-[#737373]">
              A live Crafter Station program for engineers building real AI
              products.
            </p>
          </div>
          <p className="text-sm text-[#737373]">
            © 2026 Crafter Station. All rights reserved.
          </p>
        </div>
        <nav
          aria-label="Footer links"
          className="grid gap-10 sm:grid-cols-3 sm:gap-8"
        >
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-heading text-lg font-medium text-[#171717]">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="text-sm text-[#a3a3a3]">
                        {link.label}
                      </span>
                    ) : (
                      <a
                        className="text-sm text-[#737373] transition-colors hover:text-[#171717]"
                        href={link.href}
                        rel={link.external ? "noreferrer" : undefined}
                        target={link.external ? "_blank" : undefined}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
}
