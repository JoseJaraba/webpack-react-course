import React from "react";

const CreateTodoButtom = () => {
    return(
        <button className="CreateTodoButtom" onClick={() => {
            console.log('click!')
        }}>
            Add ⚡
        </button>
    );
}

export { CreateTodoButtom};