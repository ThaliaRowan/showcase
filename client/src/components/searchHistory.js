import React, { useEffect, useState } from "react";
import Input from "./input";
import API from "../utils/API";
import SearchBtn from "./searchBtn";
import ClearBtn from "./clearBtn";
import SearchList from "./searchList";
// import Hubnames from "assets/models/names";

function SearchHistory() {
  const [searchState, setSearchState] = useState({
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
        setSearchState(
          {
            error: ""
          },

          setResultState(
            res.data
          )
        );
      })
      .catch(err => setSearchState({ error: err.message }));
  }, [])



  const handleInputChange = event => {
    setSearchState({ search: event.target.value });
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
        setSearchState({
          error: ""
        },
          setResultState(
            res.data
          )

        );
        sUser=JSON.parse(localStorage.getItem("gitUser"));
      })
      .catch(err => setSearchState({ error: err.message }));
  };
//   user = "";
//   sUsers = [];
//   function find(u) {
//     for (var i = 0; i < sUsers.length; i++) {
//       if (u.toUpperCase() === sUser[i]) {
//         return -1;
//       }
//     }
//     return 1;
//   }
  // const addToList = sUser => {
  //   var listEl = $("<li>" + sUser.toUpperCase() + "</li>");
  //   $(listEl).attr("class", "list-group-item");
  //   $(listEl).attr("data-value", sUser.toUpperCase());
  //   $(".list-group").append(listEl);
  // }
//   const invokePastSearch= event => {
//     var liEl = event.target;
//     if (event.target.matches("li")) {
//       user = liEl.textContent.trim();
//       currentsearchItem(user);
//     }

//   }

//   function loadlastUser() {
//     $("ul").empty();
//     var sUser = JSON.parse(localStorage.getItem("gitUser"));
//     if (sUser !== null) {
//       sUser = JSON.parse(localStorage.getItem("gitUser"));
//       for (i = 0; i < sUser.length; i++) {
//         addToList(sUser[i]);
//       }
//       city = sUser[i - 1];
//       currentsearchItem(user);
//     }

//   }
  // const handleclearHistory = event => {
  //   event.preventDefault();
  //   sUser = [];
  //   localStorage.removeItem("gitUser");
  //   document.location.reload();

  // }
 
  return (
    // <div>
    <div className="col-sm-4 bg-light">
      <h4 className="pt-1"><strong>GitHub Name:</strong></h4>
      <div className="input-group mb-3">
        <Input
          handleInputChange={handleInputChange}
        />
        <SearchBtn handleFormSubmit={handleFormSubmit}
        results={searchState.search}/>
      </div>
      {/* <ClearBtn handleclearHistory={handleclearHistory} /> */}
      <SearchList />
    </div>

  );
}


export default SearchHistory;
