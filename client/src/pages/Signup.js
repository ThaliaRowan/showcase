import React,{ useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card } from 'react-bootstrap';
import USER from "../utils/USER";



function Signup(){

  const [users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({
    email: '',
    password: ''
  })

  
  useEffect(() => {
    loadBooks()
  }, [])

  
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
            <div class="row" >
  <div class="col-sm-12">
     
  
  <Card style={{ width: '18rem', backgroundColor: "rgb(77, 10, 10)", color: "white"}}>
  <Card.Body>
  <div>
      <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" type="email"   onChange={handleInputChange}
                name="email"
                placeholder="email"
                value={formObject.email}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"   onChange={handleInputChange}
                name="password"
                placeholder="password"
                value={formObject.password} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </div>
  </Card.Body>
</Card>





   
  </div>
</div>

   
  </div>
        </div>
    );
    
  }
    
export default Signup;