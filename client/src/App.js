import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Signup from "./pages/signup";
import Login from "./pages/login";
import SearchedUsers from "./pages/searchedUsers";

function App() {
  return (
    <Router>
    <div>        
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/searchedUsers" component={SearchedUsers} />
    </div>
  </Router>
    
  );
}


export default App;
