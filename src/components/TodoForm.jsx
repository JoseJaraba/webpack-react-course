import React from "react";

const TodoForm = (props) => {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        //TODO
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor=""></label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="New task"/>
            <div>
                <button type="button" onClick={onCancel}>
                    Go back
                </button>
                <button type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };