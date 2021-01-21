import React from "react";



function Input(props) {
    return (
        <input 
        value={props.search}
          onChange={props.handleInputChange}
          type="text" className="form-control" id="search-city" aria-label="User Search" aria-describedby="search-button"/>                    
       );   
} 


export default Input;
