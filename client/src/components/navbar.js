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
<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <Tab mostsearchedUser={mostsearchedUser} />
      </div> */}
    </nav>
      
    </div>
  );
}


export default Navbar;
// style={"background-color:#404040", "color: white"}