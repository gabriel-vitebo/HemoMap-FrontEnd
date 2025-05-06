# Nuxt 3 Blood Donation App Structure

This document outlines the proposed structure for the Nuxt 3 blood donation web application.

## Project Root (`blood-donation-app`)

- **`assets/`**: Static assets like images, fonts, and global CSS.
  - `css/`
    - `main.css` (Global styles)
  - `images/`
    - `logo.png`
    - `map_marker_icon.png`
- **`components/`**: Reusable Vue components.
  - `AppHeader.vue`
  - `AppFooter.vue`
  - `FAQItem.vue`
  - `EligibilityQuestion.vue`
  - `InteractiveMap.vue`
  - `DonationCenterCard.vue`
- **`composables/`**: Reusable composable functions (e.g., for API calls, state management).
  - `useEligibility.js`
  - `useHemocenters.js`
- **`layouts/`**: Layout components for different page structures.
  - `default.vue` (Main application layout)
- **`pages/`**: Application pages, corresponding to routes.
  - `index.vue` (Homepage - possibly combining info and map, or a landing page)
  - `information.vue` (General blood donation information)
  - `faq.vue` (Frequently Asked Questions)
  - `eligibility.vue` (Eligibility checker form)
  - `map.vue` (Interactive map page, if separate from homepage)
- **`public/`**: Static files that are directly served (e.g., `robots.txt`, `favicon.ico`).
- **`server/`**: Server-side logic (if any, e.g., API routes for fetching hemocenter data if not using a third-party API directly from client).
  - `api/`
    - `hemocenters.get.js` (Example: API endpoint to fetch hemocenter data)
- **`store/`**: Pinia stores for state management (if needed for complex state).
  - `eligibilityStore.js`
  - `mapStore.js`
- **`nuxt.config.ts`**: Nuxt 3 configuration file.
- **`package.json`**: Project dependencies and scripts.
- **`tsconfig.json`**: TypeScript configuration (if using TypeScript).
- **`README.md`**: Project overview and setup instructions.

## Key Features and Their Components/Pages:

1.  **Informational Content & FAQ:**
    *   `pages/information.vue`: Displays general information about blood donation.
    *   `pages/faq.vue`: Displays a list of frequently asked questions.
    *   `components/FAQItem.vue`: Component to display a single FAQ question and answer.

2.  **Eligibility Checker Form:**
    *   `pages/eligibility.vue`: Hosts the eligibility questionnaire.
    *   `components/EligibilityQuestion.vue`: Component for each question in the form.
    *   `composables/useEligibility.js`: Logic for processing eligibility answers.
    *   `store/eligibilityStore.js` (Optional): For managing eligibility form state.

3.  **Interactive Map for Hemocenters:**
    *   `pages/map.vue` or integrated into `pages/index.vue`.
    *   `components/InteractiveMap.vue`: The core map component (likely using a library like Leaflet or Mapbox GL JS).
    *   `components/DonationCenterCard.vue`: To display information about a selected donation center.
    *   `composables/useHemocenters.js`: Logic for fetching and displaying hemocenter data.
    *   `server/api/hemocenters.get.js` (Optional): If creating a backend endpoint to serve hemocenter data.
    *   `assets/images/map_marker_icon.png`: Custom map marker.

## Next Steps:

1.  Scaffold the Nuxt 3 project.
2.  Set up basic project structure (folders, placeholder files).
3.  Implement global styles and layout components (`AppHeader.vue`, `AppFooter.vue`, `layouts/default.vue`).
