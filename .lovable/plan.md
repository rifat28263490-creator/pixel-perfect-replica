

# Hero Section — Animated Image Background

## What We Know
- User uploaded a ZIP file containing JPG images
- These images should replace the current hero section text content entirely
- The hero should become a full-screen animated image showcase with smooth scroll-based or auto-playing animation
- Remove: headline, subtitle, and CTA button
- Keep: decorative ellipse SVGs as overlays for brand consistency

## Steps

### 1. Extract ZIP and copy images
- Extract `ezgif-3f4df6d48fc30c88-jpg.zip` to discover the JPG files inside
- Copy all JPG files to `src/assets/hero/` for bundled imports

### 2. Rebuild HeroSection.tsx
- Remove all text content (h1, paragraph, button)
- Create a full-screen image carousel/slideshow that auto-cycles through the extracted JPGs
- Use `framer-motion`'s `AnimatePresence` for smooth crossfade transitions between images
- Each image fades in with a subtle scale or pan (Ken Burns) effect for cinematic feel
- Auto-advance every ~4 seconds with smooth crossfade
- Keep the decorative ellipse SVGs layered on top for visual depth
- Optionally add a subtle parallax scroll effect on the images using `useScroll` + `useTransform` from framer-motion

### 3. Animation Details
- **Crossfade**: Each image fades in (opacity 0→1) while the previous fades out, with a slight zoom (scale 1.05→1) for a smooth Ken Burns effect
- **Scroll parallax**: Images shift slightly on scroll using `useScroll`/`useTransform` for depth
- **Timing**: ~4s per slide, 1s transition duration
- Fully responsive — images use `object-cover` to fill the viewport

### Technical Notes
- Images imported from `src/assets/hero/` as ES modules
- `AnimatePresence` with `mode="sync"` for overlapping crossfades
- `useEffect` interval for auto-advance, cleanup on unmount

