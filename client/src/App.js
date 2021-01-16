<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import searchPage from "./pages/searchPage";
import descriptionPage from "./pages/descriptionPage";
import contact from "./pages/contact";
import "./App.css";


function App() {
    return (
        <Router>
        <div>        
          <Route exact path="/" component={searchPage} />
          <Route exact path="/searchPage" component={searchPage} />
          <Route exact path="/descriptionPage" component={descriptionPage} />
          <Route path="/contact" component={contact} />
        </div>
      </Router>
            
            
      
    );
=======
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
     <Search />
    </div>
  );
>>>>>>> main
}


export default App;
