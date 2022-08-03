import React from "react";

const TodoSearch = ({searchTaskValue, setSearchTaskValue}) => {
    return (
        <input className="TodoSearch" value={searchTaskValue} placeholder="Enter Task" onChange={(event) => {
            console.log(event.target.value);
            setSearchTaskValue(event.target.value);
        }} />
    );
}

export { TodoSearch };