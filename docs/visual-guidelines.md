# Responsive visual rules

All visual content must work on both desktop browsers and narrow mobile screens.

- Target useful layouts from roughly 320 CSS px upward. Do not introduce page-level horizontal scrolling.
- SVG charts and diagrams must use a `viewBox` and proportional sizing. When labels become unreadable on phones, render a mobile-specific layout or reduce label density instead of shrinking desktop text to illegibility.
- Legends must wrap. Long source links and captions must break safely.
- Images, video, canvas and inline SVG must stay within their content column and preserve aspect ratio.
- Wide tables, code blocks and genuinely long equations may use local horizontal scrolling; the whole page must not scroll sideways.
- Formula blocks should scale down modestly on phones before falling back to local scrolling.
- Icons must be vector or resolution-independent where possible, sized relative to text or their component rather than with a fixed bitmap size.
- Interactive controls need usable touch targets (about 44 CSS px), and essential information cannot depend on hover.
- Respect `prefers-reduced-motion`; visual meaning must remain available without animation.
- Charts must retain readable axis labels, source, units and explanatory notes on both desktop and mobile.
- Never remove provenance just to save mobile space. Reflow it below the visual instead.

The shared CSS in `src/styles/global.css` and the chart implementation in `src/components/DataChart.astro` are the baseline. New visual components should follow the same behavior.
