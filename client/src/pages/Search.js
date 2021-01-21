import React, { useEffect, useState } from "react";
import {Card, Col, Row} from 'react-bootstrap';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import '../box.css';
import Results from "../components/Results";





function Search() {

  const [searchState, setSeachState] = useState({
    search: "ThaliaRowan",
    error: ""
  })
  
  const [resultState, setResultState] = useState([]);

  // When the component mounts, update the title to be Wikipedia Searcher

useEffect(() => {
  


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
        <Results 
          resultState={resultState}
        />

        
        
       
         
    </div>
  );
};

export default Search;