# 🎓 Smart Campus Service Management

Hey everyone! 👋 Welcome to the **Smart Campus Service Request System**. 

This is a project we built to solve a huge problem on campus: broken things staying broken because nobody knows who to tell. 

Whether it's a broken light in the library, terrible Wi-Fi in the hostel, or a dripping pipe in the classroom, this app lets students report issues, staff pick them up, and admins oversee everything. 

It's deployed live here: **[🔗 https://campus-fdb87.web.app](https://campus-fdb87.web.app)**

---

## 🚀 What Does It Do?

We built this with 3 main roles in mind:

### 🎒 1. Students (You and Me)
- **Sign In/Sign Up:** Jump right in with your student email.
- **Raise Requests:** Found a broken fan in Classroom 204? Take a photo, write a quick description, select the "Electrical" category, and hit submit. 
- **Track It:** See your active requests in your dashboard. Watch the status change from `Pending` ➡ `In Progress` ➡ `Resolved`.

### 🛠️ 2. Staff & Technicians
- **Available Tasks:** See a feed of all unassigned student requests on campus.
- **Pick Up Work:** See a plumbing issue nearby? Click "Pick Up Task" and it moves to your personal queue.
- **Update Progress:** Mark tasks as `In Progress` when you start working, and `Resolved` when it's fixed!

### 👑 3. Campus Admins
- **God-Mode Dashboard:** See *every* request from *every* student in one massive grid.
- **Assign Tasks:** Manually assign the Wi-Fi issue to the specific IT guy. 
- **User Management:** See all users, change their roles, or delete old accounts. (Only Admins can make other people Admins!)

---

## 🛠️ Tech Stack (For the Nerds 🤓)

We wanted to learn modern web dev, so we used the good stuff:

- **Frontend:** React 18 + Vite (super fast!)
- **Language:** TypeScript (because debugging `undefined is not a function` at 2 AM sucks)
- **Styling:** Tailwind CSS (made styling the dashboards so much easier)
- **Icons:** Lucide React
- **Backend & Database:** Firebase Auth + Cloud Firestore (Serverless architecture, no bulky backend!)
- **Hosting:** Firebase Hosting

---

## 🏃‍♂️ How to Run It on Your Laptop

Want to run this locally or contribute? Awesome. Here's how:

### Step 1: Clone & Install
```bash
git clone https://github.com/Shreyank5478/Smart-Campus-Service-Management.git
cd "Smart Campus Service Management"
npm install
```

### Step 2: Setup Firebase
You'll need your own Firebase project if you don't have access to ours:
1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable **Authentication** (Email/Password).
3. Enable **Firestore Database**.
4. Enable **Storage** (for image uploads).
5. Copy your config keys into `src/firebase.ts`.

### Step 3: Run the App
```bash
npm run dev
```
Boom! 💥 It'll open up on `http://localhost:3000`. 

---

## 🐛 Found a Bug?
If something breaks (it probably will, we're students too 😅), just open an Issue on this repo! Or text us. 

Happy coding, and let's keep the campus running smoothly! 🏫✨