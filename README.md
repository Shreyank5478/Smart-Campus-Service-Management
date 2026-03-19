# Smart Campus Service Management

Welcome to the Smart Campus Service Request System. This project was built to solve a simple problem on campus: tracking and fixing broken infrastructure efficiently. 

It allows students to report issues, staff to claim and resolve them, and admins to oversee the entire process.

Live Deployment: **[https://campus-fdb87.web.app](https://campus-fdb87.web.app)**

---

## Features by Role

### 1. Students
- Sign in with a student email.
- Raise a request (e.g., Electrical, Plumbing, IT) with a description, location, and optional photo.
- Track the status of active requests (Pending, In Progress, Resolved).

### 2. Staff & Technicians
- View a feed of all unassigned student requests.
- Pick up tasks to add them to a personal queue.
- Update task progress and mark issues as resolved when finished.

### 3. Campus Admins
- View all requests across the campus in a master dashboard.
- Manually assign specific tasks to staff members.
- Manage user accounts and roles.

---

## Tech Stack

- **Frontend:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Backend & DB:** Firebase Auth + Cloud Firestore
- **Hosting:** Firebase Hosting

---

## Local Setup

If you want to run this locally or contribute to the project:

### 1. Clone & Install
```bash
git clone https://github.com/Shreyank5478/Smart-Campus-Service-Management.git
cd "Smart Campus Service Management"
npm install
```

### 2. Configure Firebase
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication (Email/Password), Firestore Database, and Storage.
3. Add your Firebase config keys into `src/firebase.ts`.

### 3. Run the App
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

Found a bug or want to suggest a feature? Open an issue on this repository!