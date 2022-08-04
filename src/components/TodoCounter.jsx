import React from "react";
import { TodoContext } from "./TodoContext";

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext); 
    return(
        <React.Fragment>
            <div className="TodoCounter">
                <h2>
                    What's up &#9995;
                </h2>
                <p>You've completed {completedTodos} of {totalTodos} tasks</p>
            </div>
        </React.Fragment>
    );
}

export  { TodoCounter };