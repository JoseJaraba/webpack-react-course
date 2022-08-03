import React from "react";

const TodoCounter = ({total, completed}) => {
    return(
        <React.Fragment>
            <div className="TodoCounter">
                <h2>
                    What's up &#9995;
                </h2>
                <p>You've completed {completed} of {total} tasks</p>
            </div>
        </React.Fragment>
    );
}

export  { TodoCounter };