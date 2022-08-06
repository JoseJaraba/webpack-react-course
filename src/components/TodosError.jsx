import React from "react";

const TodosError = ({error}) => {
    return(
        <div>
            <h3>We're sorry...</h3>
            <p>An error occurred while loading your TODOs</p>
        </div>
    );
}

export { TodosError };