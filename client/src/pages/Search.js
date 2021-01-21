import React, { useEffect, useState } from "react";
import { Card, Col, Row } from 'react-bootstrap';
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import '../box.css';


function Search() {

  const [searchState, setSearchState] = useState({
    search: "",
    error: ""
  })

  const [resultState, setResultState] = useState([]);

  // When the component mounts, update the title to be Wikipedia Searcher

  useEffect(() => {

    document.title = "Showcase";

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
        savesUser(searchState.search);
        setSearchState({

          error: ""
        },
          setResultState(
            res.data
          )

        );
      })
      .catch(err => setSearchState({ error: err.message }));
      };


  const handleSearchHistory = event => {
    event.preventDefault();
    const rePlay = event.target.innerHTML;
    if (!rePlay) {
      return;
    }
    API.searchTerms(rePlay)
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
      })
      .catch(err => setSearchState({ error: err.message }));
  };


  function savesUser(user) {
    let sUser = JSON.parse(localStorage.getItem('gitName'));
    console.log(sUser);
    if (sUser == null) {
      sUser = [];
    }
    sUser.push(user);
    localStorage.setItem("gitName", JSON.stringify(sUser));
  }

  const handleClearHistory = event => {
    event.preventDefault();
    localStorage.removeItem("gitName");

  };


  return (
    <div className="Container">
      <div className="row">
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleClearHistory={handleClearHistory}
          handleSearchHistory={handleSearchHistory}
          results={searchState.search}
        />
        < div className="col-sm-8" >
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
      </div>
    </div>
  );
};

export default Search;