import React,{ useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";


function Signup(){

const [emailState, setEmailState] = useState("");
const [passwordState, setPasswordState] = useState("");

  const registration = () => {
    Axios.post("http://localhost:3000/Signup?", {
      email: emailState,
      password: passwordState
    }).then((Response) => {
      console.log(Response)
    })
  }

    return(

      
        <div>
            <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form className="signup">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" onChange={(e) => {setEmailState(e.target.value)}} placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input"  onChange={(e) => {setPasswordState(e.target.value)}} placeholder="Password" />
          </div>
          <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" className="btn btn-default" onClick={registration}>Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>
    </div>
  </div>
        </div>
    );
}

export default Signup;