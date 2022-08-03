import React from "react";

const TodoCounter = () => {
    return(
        <React.Fragment>
            <div className="TodoCounter">
                <h2>
                    What's up &#9995;
                </h2>
                <p>You've completed 2 of 3 tasks</p>
            </div>
        </React.Fragment>
    );
}

export  { TodoCounter };