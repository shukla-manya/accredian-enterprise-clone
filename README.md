# Accredian Enterprise Page (Partial Clone)

1. A structured, responsive implementation of the Accredian Enterprise landing experience built using Next.js App Router.  
Reference: [https://enterprise.accredian.com/](https://enterprise.accredian.com/)

---

## 2) Assignment Objective

The goal of this assignment is to recreate the enterprise landing page structure and content with:

- Clean, scalable frontend architecture
- Reusable UI components
- Responsive behavior (mobile + desktop)
- Smooth section navigation
- Next.js-based API integration
- Vercel-ready deployment

---

## 3) Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React functional components + hooks
- **Styling:** Clean CSS in global stylesheet
- **API:** Next.js route handlers
- **Linting:** ESLint
- **Deployment:** Vercel

---

## 4) Project Structure

```text
accredian-enterprise-clone/
  app/
    api/
      enterprise-data/route.ts
      leads/route.ts
    globals.css
    icon.svg
    layout.tsx
    page.tsx
  components/
    Footer.tsx
    Navbar.tsx
    Section.tsx
  data/
    enterpriseData.ts
  types/
    enterprise.ts
  README.md
```

---

## 5) Features Implemented

### Landing Page Sections

- Hero section
- Stats section
- Clients section
- Accredian Edge section
- Domain expertise and course segmentation
- Who should join section
- CAT framework and How It Works section
- FAQs section
- Testimonials section
- Contact CTA section
- Footer

### Navigation and Flow

- Sticky top navigation
- Mobile menu toggle
- Section anchor navigation
- Smooth page scrolling

### Responsive UI

- Mobile-first responsive behavior
- Grid-to-single-column collapse on smaller screens
- CTA and card layouts adjusted for readability

### API Integration

- `GET /api/enterprise-data`  
  Returns structured page data used to render content dynamically.

- `POST /api/leads`  
  Receives lead payload (`name`, `email`, `company`) and stores it in-memory (mock backend route for bonus scope).

---

## 6) Color Palette Used

The palette follows common enterprise SaaS visual language:

- Brand Blue: `#2196f3`
- Sidebar White / Base Background: `#f9fafc`
- Navigation Gray / Border: `#dce1e6`
- CTA Orange: `#ffa500`
- Feedback Teal: `#00c7b7`
- Typography Ink: `#1e1e1e`

This blend supports trust-oriented branding, high readability, and clear action emphasis.

---

## 7) Setup and Local Development

### Prerequisites

- Node.js 18+ recommended
- npm

### Run Locally

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Open:
   - `http://localhost:3000`

### Production Build

1. Build:
   - `npm run build`
2. Start:
   - `npm run start`

### Lint

- `npm run lint`

---

## 8) Deployment on Vercel

1. Push this repository to GitHub.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the GitHub repo.
4. Keep default settings for Next.js.
5. Deploy.
6. Copy generated production URL and update the links section above.

---

## 9) Approach and Engineering Decisions

### Component Reusability

- Built generic `Section` wrapper for consistent spacing and heading structure.
- Kept nav and footer as isolated components.
- Centralized content in `data/enterpriseData.ts` for easier edits and future CMS/API migration.

### Data-Driven Rendering

- Main page fetches content from API route instead of hardcoding all text in JSX.
- Improves maintainability and demonstrates integration capability.

### Responsiveness

- Used flexible containers, grid layouts, and breakpoint-based CSS adjustments.
- Preserved hierarchy and readability across device sizes.

### Scope Alignment

- Prioritized structure clarity, accurate content flow, and assignment completeness over pixel-perfect cloning.

---

## 10) AI Usage Explanation (Required)

### Where AI Helped

- Initial project scaffolding strategy and implementation sequence.
- Drafting repetitive UI skeleton blocks and base CSS patterns.
- API route boilerplate and TypeScript type scaffolding.
- README expansion and documentation structuring.

### What Was Manually Modified / Improved

- Section-by-section content alignment to assignment text.
- Component architecture refinement for readability and reuse.
- Responsive spacing, typography, and visual consistency tuning.
- Navigation anchors and section flow adjustments.
- Footer and content polishing for strict copy matching.

---

## 11) What I Would Improve With More Time

- Add animation polish (subtle transitions, reveal effects, micro-interactions).
- Increase visual fidelity to production reference design system.
- Connect lead API to persistent database (PostgreSQL/Supabase/MongoDB).
- Add schema validation and rate limiting for API routes.
- Improve accessibility with deeper audits (keyboard flow, aria checks, contrast tests).
- Add automated tests (unit + integration + e2e).

---

## 12) Assignment Coverage Checklist

- [x] Landing page (all major sections)
- [x] Navigation menu and footer
- [x] Fully responsive layout (mobile + desktop)
- [x] Clean and structured UI
- [x] Reusable components
- [x] Smooth section navigation
- [x] Next.js App Router implementation
- [x] Functional components + hooks
- [x] API integration (mock route handlers)
- [x] Vercel-ready project setup

---

## 13) Notes for Reviewer

- This implementation intentionally emphasizes clean architecture and maintainable structure.
- Content has been aligned to the assignment-provided copy blocks.
- The API structure is included to demonstrate integration readiness and extensibility.
