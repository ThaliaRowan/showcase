import React, { useEffect, useState } from "react";
import Input from "./input";
import API from "../utils/API";
import SearchBtn from "./searchBtn";
import ClearBtn from "./clearBtn";
// import Hubnames from "assets/models/names";


function SearchHistory() {
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
        <div className="col-sm-4 bg-light">
            <h4 className="pt-1"><strong>GitHub Name:</strong></h4>
            <div className="input-group mb-3">
                <Input                 
                 handleInputChange={handleInputChange}
                 
                 />
                <SearchBtn handleFormSubmit={handleFormSubmit}
                results={searchState.search} />
            </div>
            <ClearBtn />
        </div>

    );
}


export default SearchHistory;
