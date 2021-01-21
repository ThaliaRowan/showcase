import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
// import SearchPage from "./pages/searchPage";
import Contact from "./pages/contact";
import Search from "./pages/Search";
import "./App.css";


function App() {
  document.title = "Showcase";
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Route exact path="/" component={SearchPage} />
          <Route exact path="/searchPage" component={SearchPage} /> */}
        <Route exact path="/" component={Search} />
        <Route exact path="/Search" component={Search} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
    // <div>
    //   <Search/>
    // </div>


  );
}


export default App;
