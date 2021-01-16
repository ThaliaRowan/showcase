import React from "react";
import Input from "./input";
import searchBtn from "./searchBtn";
import clearBtn from "./clearBtn";
// import Hubnames from "assets/models/names";


function searchHistory() {

    return (
        <div class="col-sm-4 bg-light">
            <h4 class="pt-1"><strong>GitHub Name:</strong></h4>
            <Input />
            <div class="input-group mb-3">
                <searchBtn />
                <clearBtn />
            </div>
        </div>

    );
}
 

export default searchHistory;
