import React from "react";

const TodoItem = (props) => {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete}>
                ᄼ 
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                &#128465;
            </span>
        </li>
    );
}

export { TodoItem };