# CUBE ERP: Project Status & Action Plan

Based on the `CUBE_ERP_OVERVIEW.txt`, here is the checklist of the project's current status:

## Completed Features (Frontend UI Core)

- [x] **React Setup**: Initialize React 18 frontend and install `@mui/material`, `@mui/x-charts`, `recharts`, `react-router-dom`.
- [x] **Employee Portal UI**: Create components for Employee Dashboard, Attendance, Tasks, Team, Profile, and Settings (`DashboardEmployee.js`, `AttendenceEmployee.js`, etc.).
- [x] **Admin Dashboard UI**: Create components for Admin Dashboard, Attendance, Employee Management, Tasks, Team, Profile, and Settings (`Dashboard.js`, `AdminAttendence.js`, `AdminEmployee.js`, etc.).
- [x] **Authentication UI**: Build Login View screens (`adminlogin.js`, `employeeLogin.js`, `poplogin.js`).
- [x] **Data Visualization (UI Only)**: Implement real-time charts placeholders (e.g., PieChart for project status in `DashboardEmployee.js`) using hardcoded dummy data.
- [x] **Data Tables (UI Only)**: Presentational tables for tasks, team members, and attendance implemented using Material-UI tables with dummy data.

---

## Pending Phases (Firebase Backend Integration)

### Phase 1: Firebase Project Setup & Initialization
- [ ] Install the `firebase` npm package in the project.
- [ ] Create a `firebase.js` configuration file to initialize the app (requires Firebase Config keys).
- [ ] Set up secure `.env` file for Firebase Admin and Client keys.
- [ ] Set up Firestore database rules (employees read/write their own data; Admins have full access).

### Phase 2: Authentication & Authorization Integrity
- [ ] Connect `employeeLogin.js` and `adminlogin.js` to Firebase Authentication.
- [ ] Implement Firebase Custom Claims to distinguish "Admin" rights from standard "Employee" rights.
- [ ] Implement React Router guards to prevent standard employees from accessing Admin routes.

### Phase 3: Complete the Admin Dashboard (Firestore Integration)
- [ ] Build Firestore CRUD operations for Admin modules.
- [ ] Connect Admin components (`AdminEmployee`, `AdminAttendence`, `AdminTasks`, `AdminTeam`) to read and write directly to Cloud Firestore.
- [ ] Replace hardcoded arrays (e.g., `adminTable`) with live data fetching.

### Phase 4: Employee Portal Connectivity
- [ ] Update Employee views to fetch authenticated user's specific data based on their Firebase User ID (UID).
- [ ] Ensure `DashboardEmployee`, `TasksEmployee`, and `AttendenceEmployee` sync securely with their respective Firestore documents.

### Phase 5: Data Visualization Polish
- [ ] Write efficient Firestore queries to aggregate statistics (e.g., weekly attendance percentage) instead of using hardcoded placeholder data.
- [ ] Connect real backend aggregated data to `@mui/x-charts` and `recharts` components.

### Phase 6: Testing & QA
- [ ] Write unit tests for core React components.
- [ ] Utilize the Firebase Emulator Suite to safely test database rules and logic locally.

### Phase 7: Production Build & Deployment
- [ ] Prepare application for production by running `npm run build`.
- [ ] Deploy the React application to Firebase Hosting utilizing the Firebase CLI.
