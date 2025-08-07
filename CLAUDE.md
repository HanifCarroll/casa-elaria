# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Casa Elaria is a luxury cosmetics brand e-commerce site built as a "fake-door" MVP for market validation. The site showcases olive-derived skincare products from San Juan, Argentina, with a focus on sustainable, conscious beauty.

## Development Commands

```bash
# Development
pnpm dev              # Start development server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run Next.js linter

# Note: No test framework is currently configured
```

## Architecture & Key Concepts

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom brand colors
- **Typography**: Playfair Display (serif headings) + Inter (body text)
- **Deployment Target**: Vercel (static export capable)
- **Future Integrations**: Airtable (leads), Resend (email), Plausible/GA4 (analytics)

### Brand Design System
The site uses a sophisticated olive-green palette with gold accents:
- `--olive-primary: #4a5d3a` (main brand color)
- `--olive-light: #8ba882` (secondary)
- `--olive-dark: #2d3e2d` (text/footer)
- `--gold: #c19a6b` (accent)
- `--cream: #faf8f4` (background)

### Site Structure & Pages
Current implementation focuses on the homepage only. Planned structure:
- `/` (Inicio) - Hero, USPs, product preview
- `/productos` - Product grid with fake-door checkout
- `/productos/[slug]` - Individual product pages
- `/quienes-somos` - Brand story
- `/contacto` - Contact form

### Content Strategy
- **Target Audience**: Women 25-55, conscious consumers, urban, premium buyers
- **Key Messaging**: "Regalá consciencia, belleza y cuidado" (Gift consciousness, beauty, and care)
- **Brand Positioning**: Local alternative to L'Occitane/Ortigia, combining ethics with luxury aesthetics
- **Products**: Liquid soap, shower oil, bar soap (all olive-derived)

### Asset Organization
```
public/
├── brand-assets/           # Logos, mockups, patterns
│   ├── Logo/              # Various logo formats (green, white, golden, black)
│   ├── Mockups/           # Product packaging visuals
│   └── Patrones/          # Brand patterns (owls, rabbits, birds)
└── product-assets/        # Product photos and videos
```

### Critical Implementation Notes

**Fake-Door Checkout Flow**:
- "Comprar" buttons trigger modal: "Muchas gracias por confiar en nosotros. Este producto pronto estará disponible. Dejanos tu e-mail para contarte cuando esté disponible."
- Email capture → Airtable storage → Resend thank-you email
- Success metrics: ≥1% email capture rate over 20-day test

**Brand Guidelines**:
- Always use Spanish navigation and content
- Maintain premium, botanical aesthetic inspired by L'Occitane/Ortigia
- Avoid generic natural product styling (see brand guide "avoid" examples)
- Emphasize San Juan origin story and circular economy benefits

**Development Priorities**:
1. Fast loading times for ad traffic
2. Mobile-first responsive design
3. Premium visual experience matching luxury competitors
4. Conversion-optimized UI for email capture