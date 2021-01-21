import React from "react";
import Form from "../components/Form";



function Contact() {
    return (
        <div className="dropdown-menu">
            <Form />
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">New around here? Sign up</a>
            <a className="dropdown-item" href="#">Forgot password?</a>
        </div>
    );
}


export default Contact;
