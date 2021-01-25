import React from "react";
import { Card, Col, Row, CardDeck } from 'react-bootstrap';
import "../button.css"


function Contact() {
    return (
        <div >
            <Row>
                <Col md="12">
                <h1 style={{color: "white", textAlign: "center", fontWeight: "bolder"}}>Contact Us</h1>
                </Col>
                
            </Row>
         <CardDeck style={{marginRight: "30px", marginLeft: "30px", marginTop: "30px"}}>
  <Card style={{textAlign: "center"}}>
    <Card.Img variant="top" src={require("../github-394322_640.png")} />
    <Card.Body>
      <Card.Title>GitHub</Card.Title>
      <Card.Text>
      <Row>
          <Col>
          <a href="https://github.com/ThaliaRowan">Thalia Romany</a>
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="https://github.com/lorjoh">Sandra Ayika</a>
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="https://github.com/topsynco">Joseluis Sierra</a>
          </Col>
        
      </Row>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
   
    </Card.Footer>
  </Card>
  <Card style={{textAlign: "center"}}>
    <Card.Img variant="top" src={require("../linked.jpg")} />
    <Card.Body>
      <Card.Title>LinkedIn</Card.Title>
      <Card.Text>
      <Row>
          <Col>
          <a href="https://www.linkedin.com/in/thalia-romany-559b15183">Thalia Romany</a>
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="">Sandra Ayika</a>
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="">Joseluis Sierra</a>
          </Col>
        
      </Row>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
  <Card style={{textAlign: "center"}}>
    <Card.Img variant="top" src={require("../email-4284157_640.png")} />
    <Card.Body >
      <Card.Title>Email</Card.Title>
      <Card.Text>
      <Row>
          <Col>
          
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="">Sandra Ayika</a>
          </Col>
        
      </Row>
      <Row>
          <Col>
          <a href="">Joseluis Sierra</a>
          </Col>
        
      </Row>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    );
}


export default Contact;
