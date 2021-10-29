import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Auth from './auth/Auth'

import Header from "./site/Header";
import Sidebar from "./site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Auth />
    </div>
  );
}

export default App;
