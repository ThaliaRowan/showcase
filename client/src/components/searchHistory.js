import React from "react";
import Input from "./input";
import SearchBtn from "./searchBtn";
import ClearBtn from "./clearBtn";
// import Hubnames from "assets/models/names";


function SearchHistory() {

    return (
        <div className="col-sm-4 bg-light">
            <h4 className="pt-1"><strong>GitHub Name:</strong></h4>
            <div className="input-group mb-3">
                <Input />
                <SearchBtn />
            </div>
            <ClearBtn />
        </div>

    );
}


export default SearchHistory;
