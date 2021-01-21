import React, {useState} from "react";
import Axios from "axios";

function Login(){

    const [loginState, setLoginState] = useState("");
    const [loginpassword, setLoginpassState] = useState("");

    const Login = () => {
        Axios.post("http://localhost:3000/Login?", {
          email: loginState,
          password: loginpassword
        }).then((Response) => {
          console.log(Response)
        });
      };

    return(
        <div>
             <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Log In Form</h2>
        <form className="signup">
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="email-input" onChange={(e) => {setLoginState(e.target.value)}} placeholder="Email" />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password-input" onChange={(e) => {setLoginpassState(e.target.value)}}   placeholder="Password" />
          </div>
          <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" className="btn btn-default" onClick={Login}>Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/Login">here</a></p>
      </div>
    </div>
  </div>
        </div>
    );
}

export default Login;