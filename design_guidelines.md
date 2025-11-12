# Portfolio Design Guidelines - Purushotham Bollepalli

## Design Approach
**Reference-Based**: Inspired by modern portfolio leaders like Linear (clean typography), Stripe (refined simplicity), and Awwwards-winning portfolios (visual impact). Dark-first aesthetic with professional polish.

## Core Design Principles
1. **Visual Hierarchy**: Bold, confident typography with clear content sections
2. **Breathing Room**: Generous spacing to let content shine
3. **Professional Impact**: Sophisticated dark theme with subtle gradients
4. **Content-First**: Projects and skills are the hero, design supports them

## Typography System
- **Primary Font**: Inter via Google Fonts CDN
- **Headings**: Bold weights (700-800), tight letter-spacing (-0.02em)
  - H1: 3.5rem desktop / 2.5rem mobile
  - H2: 2.5rem desktop / 2rem mobile  
  - H3: 1.5rem desktop / 1.25rem mobile
- **Body**: Regular (400-500), 1rem base, 1.6 line-height
- **Accents**: Semibold (600) for labels, medium (500) for buttons

## Layout System
**Tailwind Spacing**: Use units of 4, 8, 12, 16, 20, 24, 32 for consistency
- Section padding: py-20 desktop, py-12 mobile
- Card padding: p-8 desktop, p-6 mobile
- Element gaps: gap-4, gap-8, gap-12
- Container: max-w-7xl with px-8 desktop, px-4 mobile

## Component Library

### Navigation
- Sticky header with backdrop blur and subtle border
- Logo: Bold, clickable brand name (1.4rem, weight 800)
- Desktop menu: Horizontal with underline animation on hover
- Mobile: Slide-down menu with left border accent on hover
- Height: 5rem (80px) with shadow on scroll

### Hero Section
- Full viewport height (min-h-screen)
- Two-column grid (lg:grid-cols-2)
- Left: Name, title, contact info, CTA buttons
- Right: Profile image with gradient glow effect (max-w-xs, rounded-2xl)
- **Image**: Professional headshot with subtle blur glow background
- Spacing: gap-16 between columns, gap-6 for content stacking

### Project Cards
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- Card structure: Image top, content below
- **Project Images**: Screenshots/mockups (16:9 aspect ratio)
- Tech stack badges at bottom
- Expandable details section with "View Details" toggle
- Hover: Subtle lift effect (transform translateY(-4px))

### Skills Section
- Category-based organization (6 categories)
- Grid: grid-cols-2 md:grid-cols-3 lg:grid-cols-6
- Badge-style pills with icons from Heroicons
- Hover: Scale and glow effect

### Contact Form
- Two-column layout on desktop (form left, info right)
- Input fields: Dark background (hsl(217 33% 17%))
- Labels: Muted foreground color
- Submit button: Primary blue with icon
- Validation states with subtle red/green borders

### Footer
- Three columns: About, Quick Links, Contact
- Social icons with hover glow
- Copyright with current year
- Minimal, grounded design

## Visual Treatment
- **Background**: Very dark blue-gray (hsl(222 47% 4%))
- **Cards**: Slightly lighter (hsl(222 47% 5.5%)) with 1px border
- **Accents**: Bright blue primary (hsl(217 91% 60%))
- **Gradients**: Subtle radial blurs behind hero image and section dividers
- **Borders**: 1px solid hsl(217 33% 10%)
- **Shadows**: Soft, multi-layer (0 1px 3px rgba(0,0,0,0.1))

## Interactions (Minimal)
- Nav underline: Slide from center on hover (0.4s)
- Buttons: Subtle overlay on hover/active (elevate-1/elevate-2)
- Cards: Gentle lift on hover (4px translateY)
- Mobile menu: Slide down (0.3s ease)
- Project details: Smooth expand/collapse
- NO: Parallax, excessive animations, distracting scroll effects

## Images Strategy
1. **Hero**: Professional headshot (profile.png) - centered, max-width 320px
2. **Projects**: Three project screenshots - road-lane.png, sign2text.png, news-nexus.png
3. **Image Treatment**: Rounded corners (rounded-2xl), subtle shadow, gradient glow backgrounds
4. **Fallbacks**: Placeholder gradient if images missing

## Responsive Breakpoints
- Mobile: base (< 640px) - single column, stacked layout
- Tablet: md (768px+) - two columns for projects
- Desktop: lg (1024px+) - full multi-column layouts

## Accessibility
- Semantic HTML5 tags (nav, section, article)
- ARIA labels on interactive elements
- Focus states with ring-2 ring-primary
- Color contrast ratio 4.5:1 minimum
- Keyboard navigation support

## GitHub Pages Optimization
- Single HTML file structure (no build process)
- Relative paths for all assets (./images/)
- CDN links for fonts (Google Fonts)
- Inline critical CSS or single styles.css
- Compressed images (WebP with PNG fallback)
- Meta tags for SEO and social sharing

## Key Sections (In Order)
1. Navigation (sticky)
2. Hero (full viewport with image)
3. About (education + career focus cards)
4. Projects (filterable grid, 6+ projects)
5. Skills (39+ skills in 6 categories)
6. Certifications (4+ certs with badges)
7. GitHub Stats (live repository showcase)
8. Contact (form + direct contact info)
9. Footer (comprehensive with social links)

**Critical**: Every section must feel complete and polished. No sparse layouts - each card should have icons, descriptions, and supporting elements. Professional portfolio standard with exceptional attention to detail.