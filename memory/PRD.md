# Camelot SaaS Landing Page - Product Requirements Document

## Project Overview
**Product Name:** Camelot  
**Type:** Premium SaaS Landing Page  
**Design System:** Dark Glassmorphism with Orange Glow Theme  
**Date Created:** April 8, 2026  

## Original Problem Statement
Build a premium SaaS landing page for "Camelot" that follows the EXACT same visual design style as a dark, glowing, glassmorphism pricing section with an orange light source. The entire page must maintain ONE consistent design system with dark backgrounds, orange glow lighting, centered glass containers, and a premium futuristic minimal aesthetic.

## User Personas
1. **Tech-Savvy Business Owners** - Looking for AI-powered workflow automation
2. **SaaS Product Managers** - Seeking unified business operations interface
3. **Enterprise Decision Makers** - Evaluating enterprise-grade security solutions
4. **Startup Founders** - Need affordable automation tools to scale operations

## Core Requirements (Static)

### Design System
- **Color Palette:**
  - Primary Background: #000000 (black)
  - Orange Glow: #ff7a00, #ff9500
  - Glass Opacity: rgba(255, 255, 255, 0.03-0.05)
  - Text: #ffffff, rgba(255, 255, 255, 0.85)
  
- **Typography:**
  - Font Family: 'Space Grotesk'
  - Display: 66px, 48px, 32px (bold)
  - Body: 20px, 18px, 16px (regular/medium)
  
- **Components:**
  - Glass containers with backdrop-blur(24-32px)
  - Sharp corner buttons (border-radius: 0px)
  - Orange gradient buttons with glow effects
  - Smooth scroll behavior
  - Hover animations and transitions

### Page Sections
1. **Navigation** - Fixed header with logo and smooth scroll links
2. **Hero Section** - Split layout with 3D Spline animation (neon orbs)
3. **Command Preview** - AI workflow demonstration
4. **Features** - 4 glass cards with icons
5. **Transformation** - Before/After comparison
6. **How It Works** - 5-step process cards
7. **Autonomous Execution** - 4 capability cards
8. **Security** - 4 security feature cards
9. **Pricing** - 3 tier pricing (matching reference design)
10. **Final CTA** - Call-to-action with trust indicators
11. **Footer** - Links and social media

### Technical Stack
- React 19.0.0
- Tailwind CSS
- Spline 3D (@splinetool/react-spline)
- Lucide React (icons)
- React Router DOM

## What's Been Implemented ✅

### Phase 1: Frontend with Mock Data (April 8, 2026)
- ✅ Complete glassmorphism design system
- ✅ All 11 page sections with glass containers
- ✅ 3D Spline neon orbs animation in hero
- ✅ Responsive navigation with smooth scroll
- ✅ Interactive pricing section with highlight animation
- ✅ "Get Started" CTA scroll behavior with pricing highlight
- ✅ Enhanced orange glow effects throughout
- ✅ Sharp corner buttons with gradient hover states
- ✅ Lucide React icons (no emoji icons)
- ✅ Mobile responsive design
- ✅ All interactive elements functional
- ✅ Footer with social links

### Key Features Delivered
1. **Navigation:**
   - Custom links: Features | How It Works | Security | Pricing
   - Smooth scroll to sections
   - Fixed glass navbar

2. **CTA Functionality:**
   - Primary CTAs scroll to pricing section
   - Smooth animation with visual highlight (3 pulse cycles)
   - Maintains consistency across all CTA buttons

3. **Design Consistency:**
   - 90/10 color rule enforced (colors only on small elements)
   - All sections in glass containers
   - Orange glow arcs strategically placed
   - Backdrop-blur effects on all glass panels

## Architecture
```
/app/frontend/src/
├── App.js              # Main app with global background
├── App.css             # Global styles & glassmorphism system
├── pages/
│   └── Home.jsx        # Main landing page layout
└── components/
    ├── Navbar.jsx              # Fixed navigation
    ├── HeroSection.jsx         # Hero + 3D Spline
    ├── CommandPreview.jsx      # AI demo
    ├── FeaturesSection.jsx     # Feature cards
    ├── TransformationSection.jsx # Before/After
    ├── HowItWorksSection.jsx   # 5-step process
    ├── AutonomousSection.jsx   # Capabilities
    ├── SecuritySection.jsx     # Security features
    ├── PricingSection.jsx      # 3-tier pricing
    ├── FinalCTA.jsx            # Final call-to-action
    └── Footer.jsx              # Footer links
```

## Dependencies Installed
- @splinetool/react-spline@4.1.0
- @splinetool/runtime@1.12.78
- All shadcn/ui components (pre-installed)

## Prioritized Backlog

### P0 Features (Critical - Future)
- [ ] Contact form integration
- [ ] Email capture for "Get Started" CTA
- [ ] Analytics tracking (page views, CTA clicks)

### P1 Features (High Priority)
- [ ] Mobile hamburger menu functionality
- [ ] Newsletter signup in footer
- [ ] Video testimonials section
- [ ] Live chat integration
- [ ] A/B testing for CTA variations

### P2 Features (Nice to Have)
- [ ] Animated statistics counter
- [ ] Customer logo carousel
- [ ] Blog integration
- [ ] Multi-language support
- [ ] Dark/Light mode toggle (currently dark only)

## Next Tasks
1. ✅ Complete all sections with glassmorphism design
2. ✅ Integrate 3D Spline animation
3. ✅ Implement smooth scroll navigation
4. ✅ Add CTA scroll-to-pricing with highlight
5. Backend development (if needed for forms/newsletter)
6. SEO optimization
7. Performance optimization
8. Conversion tracking setup

## Design Guidelines Followed
- ✅ Green-dark-theme with 90/10 color restriction
- ✅ Sharp corners on buttons (border-radius: 0px)
- ✅ Glassmorphism with backdrop-blur
- ✅ Orange accent colors only on small elements
- ✅ Lucide React icons (NO emoji icons)
- ✅ High contrast typography for dark theme
- ✅ Smooth transitions (0.4s ease-in-out)
- ✅ Responsive breakpoints (768px, 1200px)

## Notes
- Font changed from KodeMono to Space Grotesk (Google Fonts) for better compatibility
- 3D Spline animation loads from CDN (https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode)
- All sections use mock/static content (no backend yet)
- Pricing highlight animation triggers on CTA click (3 pulse cycles)
- Design matches reference image with consistent glassmorphism aesthetic throughout
