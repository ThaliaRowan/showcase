import React from "react";
// import Container from "../components/container";
import JumboContainer from "../components/jumboContainer";
import SearchHistory from "../components/searchHistory";
import Display from "../components/display";

function SearchPage() {
    return (
        <div >
            <JumboContainer />
            {/* <Container/>              */}
            <div className="row">
                <SearchHistory />
                <Display />
            </div>
        </div>
    );
}


export default SearchPage;
