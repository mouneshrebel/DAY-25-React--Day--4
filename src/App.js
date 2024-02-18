import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import Profile from "./components/Profile";
import Task from "./components/Task";
import PendingRequest from "./components/PendingRequest";
import ProfileDetails from './components/ProfileDetails'
import ResetPassword from './components/ResetPassword'
import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom";
import UsersContextComponent from "./Context/UsersContextComponent";
import DashboardContextComponent from "./Context/DashboardContextComponent";
import UseRef from "./components/Hooks/UseRef";
import UseMemo from "./components/Hooks/UseMemo";
import UseReducer from "./components/Hooks/UseReducer";
import Hooks from "./components/Hooks/Hooks";

function App() {  
 

 
  return<>
  
  <BrowserRouter>
  <div id="wrapper">
    <Sidebar/>
    <Routes>
    <Route path="/dashboard" element={
    <DashboardContextComponent>
      <UsersContextComponent>
      <Dashboard/>
    </UsersContextComponent>
    </DashboardContextComponent> }/>
    <Route path="/add-user" element={
      <UsersContextComponent>
        <AddUser />
      </UsersContextComponent>
    }/>
    <Route path="/edit-user/:id" element={
      <UsersContextComponent>
        <AddUser />
      </UsersContextComponent>
    }/>
    <Route path="/profile" element={<Profile/>}>
      <Route path="details" element={<ProfileDetails/>}/>
      <Route path="reset-password" element={<ResetPassword/>}/>
      </Route>
    <Route path="/task" element={<Task/>}/>
    <Route path="/pendingrequest" element={<PendingRequest/>}/>
    <Route path="/hooks" element={<Hooks/>}>
      <Route path="useref" element={<UseRef/>}/>
      <Route path="usememo" element={<UseMemo/>}/>
      <Route path="usereducer" element={<UseReducer/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/dashboard"/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  </>
}

export default App;
