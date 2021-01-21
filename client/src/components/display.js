import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import '../box.css';

function Display() {
    return (

        <div className="col-sm-8">
            <div className="grid">
                {resultState.map(data => (
                    <div>
                        <Col md="6">
                            <Card className="box" style={{ width: "18rem" }} >
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>

                                    <Card.Text><span>Description: </span>{data.description}</Card.Text>
                                    <Card.Text><span>Date: </span>{data.created_at}</Card.Text>
                                    <Row>
                                        <Card.Link href={data.clone_url} className="btn btn-secondary btn-lg" style={{ marginLeft: "100px" }} role="button">View</Card.Link>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>

                ))}

            </div>
        </div>


    );


}


export default Display;
