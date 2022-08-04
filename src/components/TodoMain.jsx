import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { TodoModal } from "./TodoModal";
import { TodoForm } from "./TodoForm";
import { TodoContext } from "./TodoContext";

const TodoMain = () => {
    const {
        dataStatus, 
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        // only one tag must be returned 
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {dataStatus.error && <p>Error...</p>}
                {dataStatus.loading && <p>Loading...</p>}
                {(!dataStatus.loading && !searchedTodos.length) && <p>¡Created your first TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleCompleteTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>
            {openModal && (
                <TodoModal>
                    <TodoForm />
                </TodoModal>
            )}
            <CreateTodoButtom setOpenModal={setOpenModal} />
        </React.Fragment>  
    );
}

export { TodoMain };