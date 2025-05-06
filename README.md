# Nuxt 3 Blood Donation Web Application - BloodLink

This project is a Nuxt 3 web application designed to provide information about blood donation, check user eligibility, and help users find nearby donation centers.

## Project Structure

The application follows a standard Nuxt 3 project structure:

- **`/assets`**: Contains static assets like CSS and images.
  - `css/main.css`: Global Tailwind CSS and custom styles.
  - `images/map_marker_icon.png`: (Placeholder, ensure you add this if using a custom marker)
- **`/components`**: Reusable Vue components.
  - `AppHeader.vue`: The main navigation header for the application.
  - `AppFooter.vue`: The main footer for the application.
  - `FAQItem.vue`: A component to display individual FAQ questions and answers with a toggle.
  - `EligibilityQuestion.vue`: A component for rendering a single question in the eligibility form.
  - `InteractiveMap.vue`: The core component for displaying the Leaflet map and markers.
  - `DonationCenterCard.vue`: A component to display details of a selected donation center in a map popup.
- **`/composables`**: Reusable Vue 3 composable functions.
  - `useEligibility.js`: Contains the logic for evaluating blood donation eligibility based on user answers.
  - `useHemocenters.js`: Contains logic for fetching (currently mocked) hemocenter data.
- **`/layouts`**: Layout components for different page structures.
  - `default.vue`: The default layout used by pages, wrapping content with header and footer.
- **`/pages`**: Application pages, corresponding to routes.
  - `index.vue`: (Currently not explicitly created, Nuxt will render `app.vue` which uses `NuxtLayout` and `NuxtPage`. A dedicated `index.vue` can be added for the homepage content if needed, or `app.vue` can be customized further. For now, navigation points to specific feature pages.)
  - `information.vue`: Displays general information about blood donation.
  - `faq.vue`: Displays a list of frequently asked questions.
  - `eligibility.vue`: Hosts the eligibility checker form.
  - `map.vue`: Displays the interactive map to find donation centers.
- **`/public`**: Static files directly served from the root (e.g., `favicon.ico`, custom map markers).
  - `images/map_marker_icon.png`: (This is where the custom map marker image should be placed if `InteractiveMap.vue` references it from `/images/map_marker_icon.png`)
- **`/server`**: Server-side logic (currently not used for API routes as hemocenter data is mocked client-side).
- **`app.vue`**: The main Vue application component, sets up the layout and page rendering.
- **`nuxt.config.ts`**: Nuxt 3 configuration file (modules, CSS, etc.).
- **`package.json`**: Project dependencies and scripts.
- **`tailwind.config.js`**: Configuration for Tailwind CSS.
- **`tsconfig.json`**: TypeScript configuration.

## Features Implemented

1.  **Informational Content**: Provides users with essential information about why blood donation is important and the process involved (`/information`).
2.  **FAQ Section**: Answers common questions related to blood donation (`/faq`). Questions are displayed using an accordion-style component.
3.  **Eligibility Checker**: A form that users can fill out to get a preliminary assessment of their eligibility to donate blood (`/eligibility`).
4.  **Interactive Map**: Displays nearby blood donation centers (hemocenters) based on the user's location (if permission is granted) or a default view. Uses Leaflet and `vue-leaflet` with mock data for donation centers (`/map`).

## Setup and Running the Application

1.  **Prerequisites**:
    *   Node.js (version recommended by Nuxt 3, typically LTS)
    *   npm (or yarn/pnpm)

2.  **Installation**:
    Navigate to the project directory (`nuxt-app`) and install dependencies:
    ```bash
    cd nuxt-app
    npm install
    ```

3.  **Development Server**:
    To start the development server with hot-reloading:
    ```bash
    npm run dev
    ```
    The application will typically be available at `http://localhost:3000`.

4.  **Building for Production**:
    To build the application for production:
    ```bash
    npm run build
    ```
    This will create a `.output` directory with the production build.

5.  **Previewing Production Build**:
    To preview the production build locally:
    ```bash
    npm run preview
    ```

## Key Technologies Used

-   **Nuxt 3**: The Vue.js framework for building server-side rendered, static, or single-page applications.
-   **Vue 3**: The progressive JavaScript framework.
-   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-   **Leaflet**: An open-source JavaScript library for mobile-friendly interactive maps.
-   **vue-leaflet**: Vue 3 components for Leaflet maps.

## Notes and Potential Improvements

-   **Hemocenter Data**: Currently, hemocenter data for the map is mocked in `composables/useHemocenters.js`. In a real application, this should be replaced with an API call to a backend service or a third-party API providing this data.
-   **Custom Map Marker**: The `InteractiveMap.vue` component references a custom map marker at `/images/map_marker_icon.png`. Ensure this image exists in the `public/images/` directory for it to display correctly. If not, Leaflet's default marker will be used (which might have path issues in some setups if not handled).
-   **Homepage (`index.vue`)**: A dedicated `pages/index.vue` could be created to serve as a more engaging landing page, potentially combining key information or calls to action.
-   **Error Handling**: More robust error handling can be added, especially for API calls and geolocation services.
-   **Accessibility (a11y)**: While basic semantic HTML is used, a thorough accessibility audit and improvements should be conducted.
-   **Testing**: Unit and end-to-end tests should be written to ensure application reliability.
-   **State Management**: For more complex state, Pinia (the official Vue state management library) could be integrated, though current features are managed with Vue 3's reactivity and composables.
-   **Deployment**: The application can be deployed to various platforms like Vercel, Netlify, or a Node.js server. Refer to Nuxt 3 deployment documentation for details.

This application provides a solid foundation for a blood donation information portal. Further enhancements can be built upon this structure.
