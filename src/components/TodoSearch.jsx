import React from "react";
import { TodoContext } from "./TodoContext";

const TodoSearch = () => {
    const {searchTaskValue, setSearchTaskValue} = React.useContext(TodoContext)

    return (
        <input className="TodoSearch" value={searchTaskValue} placeholder="Enter Task" onChange={(event) => {
            console.log(event.target.value);
            setSearchTaskValue(event.target.value);
        }} />
    );
}

export { TodoSearch };