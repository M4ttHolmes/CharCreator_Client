import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Auth from './auth/Auth'

import Footer from "./site/Footer";
import Sidebar from "./site/Sidebar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);


  const updateFirstName = (firstName) => {
    setFirstName(firstName);
  };

  const updateUserName = (userName) => {
    setUsername(userName);
  };

  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  };

  const clearLocalStorage = () =>{
    localStorage.clear();
    setSessionToken(undefined);
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Sidebar firstName={firstName} username={username} sessionToken={sessionToken} clearLocalStorage={clearLocalStorage} /> : <Auth updateFirstName={updateFirstName} updateUserName={updateUserName} updateLocalStorage={updateLocalStorage}/>
  }

  return (
    <div className="App">
      <Router>
      {viewConductor()}
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
