import React from "react";
import { TodoContext } from "./TodoContext";

const TodoForm = () => {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.length <= 0) return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor=""></label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="New task"/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>
                    Go back &#128072;
                </button>
                <button className="TodoForm-button TodoForm-button-add" type="submit" disabled={!newTodoValue}>
                    Add &#129305;
                </button>
            </div>
        </form>
    );
}

export { TodoForm };