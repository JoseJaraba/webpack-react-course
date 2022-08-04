import React from "react";

const CreateTodoButtom = (props) => {
    return(
        <button className="CreateTodoButtom" onClick={() => props.setOpenModal(true)}>
            Add ⚡
        </button>
    );
}

export { CreateTodoButtom};