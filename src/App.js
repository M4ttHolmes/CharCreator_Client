import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Auth from './auth/Auth'

import Footer from "./site/Footer";
import Sidebar from "./site/Sidebar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);

  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearLocalStorage = () =>{
    localStorage.clear();
    setSessionToken(undefined);
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Sidebar sessionToken={sessionToken} clearLocalStorage={clearLocalStorage} /> : <Auth updateLocalStorage={updateLocalStorage}/>
  }

  return (
    <div className="App">
      <Router>
      {viewConductor()}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
