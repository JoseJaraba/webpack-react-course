import React from "react";

const CreateTodoButtom = (props) => {
    return(
        <button className="CreateTodoButtom" onClick={() => props.setOpenModal(true)}>
            New Task ⚡
        </button>
    );
}

export { CreateTodoButtom};