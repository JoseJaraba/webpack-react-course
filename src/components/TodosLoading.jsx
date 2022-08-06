import React from "react";

const TodosLoading = () => {
    return (
        <div className="LoadingTodo-container">
            <p className="LoadingTodo-text">
                Loading TODOs...
            </p>
            <span className="LoadingTodo-Icon">&#8987;</span>
        </div>
    );
}

export { TodosLoading };