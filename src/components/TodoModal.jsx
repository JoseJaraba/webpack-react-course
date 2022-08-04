import React from "react";
import ReactDOM from "react-dom";

const TodoModal = (props) => {
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById('modal')
    );
}

export { TodoModal };