import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddDoctor from "./components/AddDoctor/AddDoctor";
import { createContext, useState } from "react";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Allpatients from "./components/AllPatients/Allpatients/Allpatients";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h2>{loggedInUser.email}</h2>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/appointment">
            <Appointment />
          </PrivateRoute>
          <Route exact path="/allPatients">
            <Allpatients />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/addDoctor">
            <AddDoctor />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
