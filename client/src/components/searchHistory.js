import React from "react";
import Input from "./input";
import searchBtn from "./searchBtn";
import clearBtn from "./clearBtn";
// import Hubnames from "assets/models/names";


function SearchHistory() {

    return (
        <div className="col-sm-4 bg-light">
            <p>test3</p>
            <h4 className="pt-1"><strong>GitHub Name:</strong></h4>
            <Input />
            <div className="input-group mb-3">
                <searchBtn />
                <clearBtn />
            </div>
        </div>

    );
}
 

export default SearchHistory;
