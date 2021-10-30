import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Auth from './auth/Auth'

import Footer from "./site/Footer";
// import Header from "./site/Header";
import Sidebar from "./site/Sidebar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./site/Home";

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
  };

  const clearLocalStorage = () =>{
    localStorage.clear();
    setSessionToken(undefined);
  }

  const viewConductor = () => {
    return sessionToken !== undefined ?
    <Sidebar /> : <Auth updateLocalStorage={updateLocalStorage}/>
  }
  return (
    <div className="App">
      <Router>
      <Header clearLocalStorage={clearLocalStorage} />
      {viewConductor()}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
