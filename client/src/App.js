import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/searchPage";
import descriptionPage from "./pages/descriptionPage";
import contact from "./pages/contact";
import "./App.css";


function App() {
    return (
        <Router>
        <div>        
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/searchPage" component={SearchPage} />
          <Route exact path="/descriptionPage" component={descriptionPage} />
          <Route path="/contact" component={contact} />
        </div>
      </Router>
            
            
      
    );
}


export default App;
