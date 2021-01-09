import React, { useEffect, useState } from "react";
import {Card, Col, Row} from 'react-bootstrap';
import API from "../utils/API";
import SearchForm from "./SearchForm";
import '../box.css';






function Search() {

  const [searchState, setSeachState] = useState({
    search: "ThaliaRowan",
    error: ""
  })
  
  const [resultState, setResultState] = useState([]);

  // When the component mounts, update the title to be Wikipedia Searcher

useEffect(() => {
  
  document.title = "Wikipedia Searcher";

  API.searchTerms(searchState.search)
    .then(res => {
      console.log(res.data);
      if (res.data.length === 0) {
        throw new Error("No results found.");
      }
      if (res.data.status === "error") {
        throw new Error(res.data.message);
      }
      setSeachState(
       {
           error: ""
       },

       setResultState(
           res.data
       )
      );
    })
    .catch(err => setSeachState({ error: err.message }));
}, [])



 const handleInputChange = event => {
    setSeachState({ search: event.target.value });
  };

 const handleFormSubmit = event => {
    event.preventDefault();
    if (!searchState.search) {
      return;
    }
    API.searchTerms(searchState.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setSeachState({
            error: ""
        },
        setResultState(
            res.data
        )
       
        );
      })
      .catch(err => setSeachState({ error: err.message }));
  };
  return (
    <div>

         <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={searchState.search}
          /> 

        <div className="grid">
        {resultState.map(data=>(
             <div>
               
                     <Col md="6">
                     <Card className="box" style={{width: "18rem"}} >
         <Card.Body>
         <Card.Title>{data.name}</Card.Title>
        
         <Card.Text><span>Description: </span>{data.description}</Card.Text>
             <Card.Text><span>Date: </span>{data.created_at}</Card.Text>
             <Row>
             <Card.Link href={data.clone_url} className="btn btn-secondary btn-lg" style={{marginLeft: "100px"}}role="button">View</Card.Link>
             </Row>
         </Card.Body>
             </Card>
                 </Col>
            
                   
          
         </div>
              
          ))}

        </div>
         
    </div>
  );
};

export default Search;