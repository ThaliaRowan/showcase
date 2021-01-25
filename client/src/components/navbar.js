import React from "react";
// import Tab from "./tab";
import { Link } from "react-router-dom";

function Navbar() {

  // const mostsearchedUser = () => {
  //   Hubnames.max('gitname').then(max => {
  //     return;
  //   })
  // }

  return (
    <div>
      {/* <div className="jumbotron container-fluid mt-2 text-center p-2" >
        <h1> <strong>Showcase</strong></h1>
      </div> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <Link className="navbar-brand" to="/">
      <h1> <strong>Showcase</strong></h1>
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item" >
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
            
          </li>
          <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>


        </ul>

        
      </div>
      
      <li className="nav-item ml-auto" style={{float: "left"}}>
            <Link
            
              to="/Signup"
              className={window.location.pathname === "/Signup" ? "nav-link active" : "nav-link"}
              style={{color: "rgba(255,255,255,.5)"}}
            >
              Signup
            </Link>
            
          </li>

      
          
    
      {/* <div>
        <Tab mostsearchedUser={mostsearchedUser} />
      </div> */}
    </nav>
      
    </div>
  );
}


export default Navbar;
// style={"background-color:#404040", "color: white"}