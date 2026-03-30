

# Digital Agency Website — Exact Replica

## Design System
- **Background**: Dark (#0a0a0a / near-black)
- **Primary accent**: Teal (#167176)
- **Secondary accent**: Amber/Orange (#FCAE1F)
- **Text**: White and muted gray
- **Font**: Clean sans-serif
- **Decorative**: Blurred gradient ellipses (using provided SVG assets)

## Sections (top to bottom)

### 1. Navigation Bar
- Logo on left, nav links (Home, About, Services, etc.), orange "Contact Us" CTA button

### 2. Hero Section
- "We Build Future-Ready **Digital Products**" headline
- Subtitle text, CTA button
- Background: dark with teal/amber blurred ellipses (provided SVGs), decorative looper pattern

### 3. Core Features
- Section title with orange underline on "Features"
- 4 icon cards in a row (e.g., Custom Development, Cloud Solutions, etc.)
- Teal blurred ellipse in bottom-left corner

### 4. Our Services
- Title with orange accent on "Services"
- Subtitle text
- Grid of service cards with icons, each with a hover/active state showing an orange left border

### 5. Working Process
- Title with orange accent on "Process"
- 4 numbered steps (01–04) in vertical layout with orange number badges
- Steps: Research & Analysis, Detailed Planning, Design & Implementation, Testing & Launch
- Right-side decorative looper SVG and amber ellipse

### 6. What We Do
- Split layout: left side with circular image thumbnails and dots, right side with text description and bullet points

### 7. Why Choose Us
- Title with orange accent
- Left: feature list items with teal icons
- Right: image with overlay

### 8. Technologies We Work With
- Title with orange accent
- Tab filters (Frontend, Backend, etc.)
- Logo grid showing tech icons (React, Angular, Swift, .NET, etc.)

### 9. Case Studies
- Title with orange accent
- Cards with project images and overlay text

### 10. Blog Title
- Blog post cards with images, dates, and titles

### 11. Testimonials
- Title with orange accent
- Testimonial cards with quotes, avatars, names, and ratings

### 12. FAQ Section
- Accordion-style questions with expand/collapse

### 13. Get in Touch / Footer
- Contact form section
- Footer with logo, social links, quick links, newsletter signup
- Copyright bar

## Assets
- Copy all provided SVG ellipses and looper background to `src/assets/`
- Use them as decorative positioned elements in relevant sections

## Implementation
- Single-page layout in `Index.tsx`
- Break into component files per section for maintainability
- Fully responsive
- Smooth scroll navigation
- Accordion component for FAQ using existing shadcn accordion

