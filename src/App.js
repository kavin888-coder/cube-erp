import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
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
import AdminTeam from './Component/Admin/AdminTeam';
import AdminProfile from './Component/Admin/AdminProfile';
import Settings from './Component/Admin/AdminSettings';

import EmployeeDashboard from './Component/Employee/DashboardEmployee';
import EmployeeAttendence from './Component/Employee/AttendenceEmployee';
import EmployeeTasks from './Component/Employee/TasksEmployee';
import EmployeeTeam from './Component/Employee/TeamEmployee';
import EmployeeProfile from './Component/Employee/ProfileEmployee';
import EmployeeSettings from './Component/Employee/SettingsEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popup' element={<Poplogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/employeelogin' element={<EmployeeLogin/>}/>


        <Route path='/admindashboard' element={<Dashboard/>}/>
        <Route path='/adminemployee' element={<AdminEmployee/>}/>
        <Route path='/employeeAdd' element={<EmployeeAdd/>}/>
        <Route path='/editEmployee' element={<EditEmployee/>}/>
        <Route path='/adminattendence' element={<AdminAttendence/>}/>
        <Route path='/admintask' element={<AdminTasks/>}/>
        <Route path='/adminteam' element={<AdminTeam/>}/>
        <Route path='/adminprofile' element={<AdminProfile/>}/>
        <Route path='/adminsettings' element={<Settings/>}/>

        <Route path='/employeeDashboard' element={<EmployeeDashboard/>}/>
        <Route path='/employeeAttendence' element={<EmployeeAttendence/>}/>
        <Route path='/employeetask' element={<EmployeeTasks/>}/>
        <Route path='/employeeteam' element={<EmployeeTeam/>}/>
        <Route path='/employeeProfile' element={<EmployeeProfile/>}/>
        <Route path='/employeeSettings' element={<EmployeeSettings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
