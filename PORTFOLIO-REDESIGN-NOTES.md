# Kryvanta Digital — Full Portfolio Redesign

This branch updates all portfolio displays, not merely selected featured projects.

## Inventory and scope
- 58 existing portfolio entries across 30 industry categories remain in place.
- 57 fictional service-business designs now render with custom-coded HTML/CSS visual studies.
- ClutchPoint Gaming retains its existing branded screenshot (the in-house project).
- All old six generic flagship iframes are replaced with the new design renderer.
- Both homepage moving gallery and full portfolio rails use the new renderer.
- Three Signature Concepts cards previously referencing missing images now use coded fallback designs; the exact approved generated image files are *not* included.
- Phone, calendar booking, Netlify inquiry form, pricing, and all navigation links remain unchanged.

## Technical
- design-previews/collection.html renders a design based on ?site=<slug>.
- portfolio-v9.js replaces only the visual previews (non-clickable) in existing cards.
- portfolio-v9.css handles responsive aspect ratio/scaling, lazy loading, and signature cards.
- portfolio-data.json remains the authoritative collection metadata.
- New artboards load when close to the viewport, not all at once.

## Accuracy
These 57 visuals are one-page, static coded portfolio concepts. They are not fully functional customer websites or proof of past paid commissions. No client names, testimonials, review counts, or revenue results have been invented.

## QA
Verified 57 unique slugs were replaced in the local portfolio DOM; only actual ClutchPoint Gaming preview images remained.
Sampled 15 renderings in Chromium against the existing photography assets. Visual review is still recommended before merge.
