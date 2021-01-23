import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  const sUser = JSON.parse(localStorage.getItem("gitName")) || [];
  return (

    <div className="col-sm-4 bg-transparent">
      <h4 className="text-warning"><strong>GitHub Name:</strong></h4>
      <div className="input-group mb-3">
        <input
          value={props.search}
          onChange={props.handleInputChange }
          type="text" className="form-control" id="searchUser" aria-label="User Search" aria-describedby="search-button" />
        <div className="input-group-append" >
          <button className=" btn bg-warning text-light" onClick={props.handleFormSubmit} id="search-button"><i className="fa fa-search"></i></button>
        </div>
      </div>
      <div>
        <button className=" btn btn-warning" type="button" onClick={props.handleClearHistory} id="clear-history">Clear History</button>
        <ul className="list-group"> {sUser.map(name => (<li onClick={props.handleSearchHistory} className="list-group-item">{name}</li>))}</ul>
      </div>
    </div>
  );
}

export default SearchForm;
