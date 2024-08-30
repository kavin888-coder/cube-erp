import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Poplogin from './Component/poplogin';
import AdminLogin from './Component/adminlogin';
import EmployeeLogin from './Component/employeeLogin';

import Dashboard from './Component/Admin/Dashboard';
import AdminEmployee from './Component/Admin/AdminEmployee';
import EmployeeAdd from './Component/Admin/EmployeeAdd';
import EditEmployee from './Component/Admin/EditEmployee';
import AdminAttendence from './Component/Admin/AdminAttendence';
import AdminTasks from './Component/Admin/AdminTasks';
import NewTask from './Component/Admin/newtask';
import AdminTeam from './Component/Admin/AdminTeam';
import NewTeam from './Component/Admin/newTeam';
import AdminProfile from './Component/Admin/AdminProfile';
import Settings from './Component/Admin/AdminSettings';

import EmployeeDashboard from './Component/Employee/DashboardEmployee';
import EmployeeAttendence from './Component/Employee/AttendenceEmployee';
import EmployeeTasks from './Component/Employee/TasksEmployee';
import EmployeeTeam from './Component/Employee/TeamEmployee';
import EmployeeProfile from './Component/Employee/ProfileEmployee';
import EmployeeSettings from './Component/Employee/SettingsEmployee';

import ProtectedRoute from './Component/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popup' element={<Poplogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/employeelogin' element={<EmployeeLogin />} />

        {/* Protected Admin Routes */}
        <Route path='/admindashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/adminemployee' element={
          <ProtectedRoute>
            <AdminEmployee />
          </ProtectedRoute>
        } />
        <Route path='/employeeAdd' element={
          <ProtectedRoute>
            <EmployeeAdd />
          </ProtectedRoute>
        } />
        <Route path='/editEmployee' element={
          <ProtectedRoute>
            <EditEmployee />
          </ProtectedRoute>
        } />
        <Route path='/adminattendence' element={
          <ProtectedRoute>
            <AdminAttendence />
          </ProtectedRoute>
        } />
        <Route path='/admintask' element={
          <ProtectedRoute>
            <AdminTasks />
          </ProtectedRoute>
        } />
        <Route path='/addNewtask' element={
          <ProtectedRoute>
            <NewTask />
          </ProtectedRoute>
        } />
        <Route path='/adminteam' element={
          <ProtectedRoute>
            <AdminTeam />
          </ProtectedRoute>
        } />
        <Route path='/addNewteam' element={
          <ProtectedRoute>
            <NewTeam />
          </ProtectedRoute>
        } />
        <Route path='/adminprofile' element={
          <ProtectedRoute>
            <AdminProfile />
          </ProtectedRoute>
        } />
        <Route path='/adminsettings' element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } />

        {/* Protected Employee Routes */}
        <Route path='/employeeDashboard' element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
        <Route path='/employeeAttendence' element={
          <ProtectedRoute>
            <EmployeeAttendence />
          </ProtectedRoute>
        } />
        <Route path='/employeetask' element={
          <ProtectedRoute>
            <EmployeeTasks />
          </ProtectedRoute>
        } />
        <Route path='/employeeteam' element={
          <ProtectedRoute>
            <EmployeeTeam />
          </ProtectedRoute>
        } />
        <Route path='/employeeProfile' element={
          <ProtectedRoute>
            <EmployeeProfile />
          </ProtectedRoute>
        } />
        <Route path='/employeeSettings' element={
          <ProtectedRoute>
            <EmployeeSettings />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
