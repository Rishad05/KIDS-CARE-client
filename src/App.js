import React, { createContext, useState } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import AddClass from './Component/Dashboard/AddClass/AddClass';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Feedback from './Component/Dashboard/Feedback/Feedback';
import EnrollingClassList from './Component/Dashboard/EnrollingClassList/EnrollingClassList';
import EnrollClass from './Component/Dashboard/EnrollClass/EnrollClass';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import ClassOrderList from './Component/Dashboard/ClassOrderList/ClassOrderList';
import ClassManage from './Component/Dashboard/ClassManage/ClassManage';
import AddAdmin from './Component/Dashboard/AddAdmin/AddAdmin';
import Classes from './Component/Home/Classes/Classes';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/enrollClass/:id">
            <EnrollClass></EnrollClass>
          </PrivateRoute>
          <PrivateRoute path="/enrollClass">
            <Classes></Classes>
          </PrivateRoute>
          <PrivateRoute path="/enrollingClassList">
           <EnrollingClassList></EnrollingClassList>
          </PrivateRoute>
          <PrivateRoute path="/giveFeedback">
            <Feedback></Feedback>
          </PrivateRoute>
          <PrivateRoute path="/classOrderList">
            <ClassOrderList></ClassOrderList>
          </PrivateRoute>
          <PrivateRoute path="/addClasses">
            <AddClass></AddClass>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/classManage">
            <ClassManage></ClassManage>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
