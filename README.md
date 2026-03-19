
    # Smart Campus Service Management

    React + Firebase implementation of the Smart Campus Service Management system.
    The original design reference is available at:
    https://www.figma.com/design/dHDjH2e1Zp0Kc2sAztsTwU/Smart-Campus-Service-Management

    ## Stack

    - React 18 with Vite
    - TypeScript
    - Tailwind CSS (utility classes + design tokens in `src/styles/globals.css`)
    - Firebase Authentication & Cloud Firestore (see `src/firebase.ts`)

    ## Running the app

    1. Install dependencies:

      - `npm i`

    2. Configure Firebase:

      - Follow the steps in `FIREBASE_SETUP.md` to create a Firebase project
      - Update the config object in `src/firebase.ts` with your own credentials

    3. Start the development server:

      - `npm run dev`

    The app will be available on the local URL printed by Vite.

    ## Build

    - `npm run build` – create a production build in the `build/` directory.

    ## Key screens

    - Login / Sign Up (email + password, role-aware)
    - Student Dashboard – raise and track personal service requests
    - Staff Dashboard – pick up, progress, and resolve assigned requests
    - Admin Dashboard – view all requests, filter, assign to staff, and manage users

    For additional AI/editor guidelines, see `src/guidelines/Guidelines.md`.
  