import React from "react";


function Results(props){
    return(
        <div>
                {props.resultState.map(data=> (
                        <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">{data.description}</p>
                            <p className="card-text">{data.created_at}</p>
                            <a href={data.url} class="btn btn-secondary btn-lg" role="button">View</a>
                    </div>
                </div>
                ))}
                
        </div>
    );

}

export default Results;