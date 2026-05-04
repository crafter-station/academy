# Dub.co Homepage Visual Style Reference

Source: live `https://dub.co` homepage observed on 2026-05-03. Values are observed from the rendered site, not official Dub brand guidelines.

## 1. Core Aesthetic

- Style name: **Precision SaaS Minimalism With Product-UI Proof**
- Design philosophy: Turn complex attribution infrastructure into something trustworthy and obvious by pairing strict black-and-white minimalism with tangible product interfaces, restrained motion, and color-coded feature cues.
- Key influences or hybrid styles identified:
  - Swiss grid discipline: centered hero, visible page grid, crisp alignment, and large whitespace fields.
  - Vercel/Linear-style SaaS minimalism: neutral palette, sharp hierarchy, tiny borders, and confidence through restraint.
  - Product-led growth landing page: screenshots, tabs, metrics, testimonials, customer logos, and CTA repetition do most of the persuasion.
  - Developer-tool documentation language: API/code modules, SDK tabs, monospace snippets, and infrastructure copy.
  - Dashboard/UI mockup aesthetic: floating cards, QR builders, conversion charts, partner rows, badges, and micro-interactions rendered as proof objects.
  - Editorial proof system: large testimonial quotes and customer grids create narrative authority without heavy illustration.

## 2. Color Palette

- Total color count: 21 observed base colors, excluding alpha variants, customer-logo artwork, photos, and transient syntax colors inside embedded code screenshots.

- Color name: Page Canvas
  - Hex code: `#FAFAFA`
  - Usage context: Body background; keeps the page slightly softer than pure white.

- Color name: Surface White
  - Hex code: `#FFFFFF`
  - Usage context: Navigation bar, cards, announcement pill, secondary CTAs, product mockup panels, and most interior UI surfaces.

- Color name: Ink Black
  - Hex code: `#000000`
  - Usage context: Logo, primary hero CTA, product marks, QR codes, and highest-contrast interactive elements.

- Color name: Default Ink
  - Hex code: `#0A0A0A`
  - Usage context: Default body text and high-contrast UI text.

- Color name: Heading Charcoal
  - Hex code: `#171717`
  - Usage context: Major headings on light backgrounds and the base color for the final dark CTA section.

- Color name: Active Neutral
  - Hex code: `#262626`
  - Usage context: Selected tabs, active labels, and strong secondary text.

- Color name: Navigation Neutral
  - Hex code: `#404040`
  - Usage context: Main navigation links and medium-emphasis interface text.

- Color name: Body Gray
  - Hex code: `#525252`
  - Usage context: Hero subhead, section paragraphs, testimonial copy, and explanatory content.

- Color name: Secondary Gray
  - Hex code: `#737373`
  - Usage context: Secondary button text, muted links, inactive states, and supporting labels.

- Color name: Soft Muted Gray
  - Hex code: `#A3A3A3`
  - Usage context: Low-emphasis text, dark-section paragraph copy, inactive feature cards, and subdued metadata.

- Color name: Subtle Surface
  - Hex code: `#F5F5F5`
  - Usage context: Unselected tab backgrounds, pale panels, and muted controls.

- Color name: Fine Border
  - Hex code: `#E5E5E5`
  - Usage context: Page grid lines, card borders, section dividers, input borders, and product mockup outlines.

- Color name: Pill Border
  - Hex code: `#D4D4D4`
  - Usage context: Announcement pill border, stronger separators, and edges that need more definition than the default border.

- Color name: Dub Links Orange
  - Hex code: `#FB923C`
  - Usage context: Orange feature icon tile for Dub Links and warm product-category markers.

- Color name: Orange Action
  - Hex code: `#EA580C`
  - Usage context: Active feature rail, orange "Learn more" links, and link-category emphasis.

- Color name: Analytics Green
  - Hex code: `#22C55E`
  - Usage context: Conversion Analytics icon accents, positive metrics, and chart highlights.

- Color name: Success Wash
  - Hex code: `#DCFCE7`
  - Usage context: "Verified" badges and success-state backgrounds in product mockups.

- Color name: Focus Blue
  - Hex code: `#3B82F6`
  - Usage context: Focus rings, data accents, input states, and blue UI highlights.

- Color name: Blue Tag Wash
  - Hex code: `#DBEAFE`
  - Usage context: Pale blue tags and selected metadata pills inside product examples.

- Color name: Partners Violet
  - Hex code: `#A855F7`
  - Usage context: Dub Partners icon accents, partner-program affordances, and violet data marks.

- Color name: Violet Action
  - Hex code: `#7C3AED`
  - Usage context: Active partner feature rail, violet "Learn more" links, and partner-story CTA accents.

## 3. Typography System

- Headline style:
  - Family type: `satoshi`, observed as a custom geometric/grotesk display sans with rounded terminals and high x-height.
  - Weight: `500` medium; confident without becoming heavy or shouty.
  - Scale: hero heading renders at `48px` with `55.2px` line-height on desktop and about `36px` with `40px` line-height on mobile.
  - Section headings: typically `48px` with tight `48px` line-height on desktop; mobile scales down but keeps the same compact, product-led rhythm.
  - Letter spacing: normal in computed styles; visual crispness comes from font choice, weight, and line-height rather than tracking tricks.

- Body and secondary text treatment:
  - Family type: `Inter`, rendered as the default UI/body sans.
  - Hero paragraph: about `20px` with `28px` line-height on desktop, reducing to `16px` with `24px` line-height on mobile.
  - Buttons: `14px`, `500` weight, `20px` line-height, compact `8px` radius, and generous horizontal padding.
  - Navigation: compact medium-weight sans, visually around `14px` to `16px`, with dark-neutral text and minimal ornament.
  - Supporting labels and microcopy: smaller neutral text, often `12px` to `14px`, using gray values rather than opacity alone.

- Hierarchy structure:
  - Level 1: centered hero headline, short and outcome-oriented.
  - Level 2: large Satoshi section headings, usually paired with one paragraph and one CTA.
  - Eyebrow/product labels: icon plus product name, for example Dub Links, Dub Analytics, and Dub Partners.
  - Product proof layer: dense UI text, metrics, tags, badges, and code snippets demonstrate capability beneath the simpler marketing layer.
  - Social proof layer: oversized testimonial quotes and customer logos interrupt feature sections to reinforce trust.

- Special considerations:
  - Monospace is reserved for code/API content; observed root variable is `GeistMono` with system monospace fallbacks.
  - No bilingual treatment is visible on the homepage.
  - Syntax-colored code introduces red, blue, green, and purple accents, but these are contained inside developer proof modules rather than the brand system.
  - All-caps appears sparingly in metric labels and product mockups, not in main marketing headlines.

## 4. Key Design Elements

- Textures and treatments:
  - Faint grid background on the hero and final CTA, using ultra-light line work over white and low-opacity line work over dark.
  - Dotted matrix fields behind long narrative/testimonial sections, giving technical texture without adding illustration noise.
  - Large soft fades and masks around product screenshots, especially at the bottom edge of hero/product demos.
  - Rounded white cutouts between sections create a physical, carved-paper transition from white content into product bands or the dark CTA.
  - Subtle shadows, often small and low-opacity, define cards and buttons without making the page feel skeuomorphic.
  - Dark closing section uses a near-black base with a muted green/amber gradient wash, white grid lines, and inverted CTA contrast.

- Graphic elements:
  - Product tabs act as the first visual taxonomy: Short Links, Conversion Analytics, and Affiliate Programs.
  - Feature icons sit in small rounded squares, with category-specific color: orange for links, green/blue for analytics, violet for partners.
  - Active feature cards use a thin vertical color rail and saturated "Learn more" text instead of filled cards.
  - Product screenshots and mock interfaces dominate the visual language: link builders, QR code panels, funnel charts, partner rows, customer cards, and code windows.
  - Customer logos are placed in large bordered grid cells, alternating with testimonials and person thumbnails.
  - The changelog section uses a vertical timeline with circular date nodes, creating a quieter product-velocity signal.
  - CTA buttons use a binary contrast system: black fill on light backgrounds, white fill on dark backgrounds, translucent white secondary button on dark.

- Layout structure and grid system:
  - Desktop layout uses a centered max-width content column around a visible grid; observed content regions often resolve around a `1024px` grid-width container.
  - Hero is vertically spacious: announcement pill, headline, paragraph, CTAs, then a product visual stage.
  - Sections alternate between text-led introductions and visual proof blocks, usually with one clear message per section.
  - Feature-detail rows use three-column layouts on desktop with vertical separators and one active item.
  - Social proof uses a bento/grid structure: logo-only cells, quote cells, link chips, and author blocks.
  - Mobile behavior stacks content vertically, keeps auth CTAs visible in the header, hides full navigation behind a hamburger, wraps tabs into multiple rows, and crops product screenshots into scroll-friendly panels.

- Unique stylistic choices:
  - The page is intentionally color-sparse at the brand layer, then color-rich inside product evidence.
  - Large empty space is used as a credibility signal; the page does not rush to fill every viewport.
  - The homepage sells through exact UI artifacts rather than metaphorical illustration.
  - Feature colors behave like a navigation language across icons, tabs, rails, links, and product examples.
  - The core visual tension is severe black-and-white precision versus playful saturated micro-accents.
  - Another tension is calm editorial copy versus dense dashboard evidence: the marketing message is simple, while the product visuals imply depth.

## 5. Visual Concept

- Conceptual bridge:
  - The design bridges marketing clarity and developer-grade infrastructure: "clicks" are translated into revenue, attribution, partner payouts, APIs, and customer proof through concrete product interfaces.

- Relationship between elements:
  - The grid suggests measurement, systems, and attribution paths.
  - The typography creates calm executive confidence before the product UI introduces operational detail.
  - The black-and-white base makes Dub feel stable and infrastructure-like.
  - The orange, green, blue, and violet accents map specific product capabilities so users can track categories across the page.
  - Testimonials and logos sit between product sections to connect interface claims with social validation.
  - The final dark section compresses the whole story into a decisive conversion moment with inverted contrast and trust-rating cues.

- Ideal use cases:
  - B2B SaaS and product-led growth landing pages where the product itself is the strongest sales asset.
  - Developer tools, analytics platforms, attribution products, API infrastructure, link management, fintech tooling, and dashboard-heavy services.
  - Enterprise-ready startup brands that need to feel modern, fast, precise, and reliable without looking corporate or decorative.
  - Conversion pages that need to balance technical credibility, customer proof, and accessible executive messaging.
  - Less ideal for highly emotional consumer brands, luxury editorial sites, or campaigns that need rich photography as the primary narrative device unless the system is warmed up substantially.
