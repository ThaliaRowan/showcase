import React,{ useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import USER from "../utils/USER";



function Signup(){

  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    email: '',
    password: ''
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    USER.getUser()
      .then(res => 
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email && formObject.password) {
      USER.saveUser({
        email: formObject.email,
        password: formObject.password
      })
        .then(() => setFormObject({
          email: "",
          password: "",
         
        }))
        .then(() => loadBooks())
        .catch(err => console.log(err));
    }
  };




    return(

      
        <div>
            <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Sign Up Form</h2>
        <form className="signup" >
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
                onChange={handleInputChange}
                name="email"
                placeholder="email"
                value={formObject.email}
              />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
                onChange={handleInputChange}
                name="password"
                placeholder="password"
                value={formObject.password}
              />
          </div>
          <div style={{display: "none"}} id="alert" className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span className="sr-only">Error:</span> <span className="msg"></span>
          </div>
          <button type="submit" className="btn btn-default" 
                onClick={handleFormSubmit}>Sign Up</button>
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