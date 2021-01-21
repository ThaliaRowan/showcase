import React from "react";



function SearchBtn(props) {
    return (
                 
                <div className="input-group-append" >
                    <button className=" btn bg-primary text-light" onClick={props.handleFormSubmit} id="search-button"><i className="fa fa-search"></i></button>
                </div>             
                        
       );   
} 


export default SearchBtn;
