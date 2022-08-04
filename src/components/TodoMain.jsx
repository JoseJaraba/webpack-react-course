import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { TodoModal } from "./TodoModal";
import { TodoForm } from "./TodoForm";

const TodoMain = ({
    dataStatus,
    totalTodos, 
    completedTodos,
    searchTaskValue, 
    setSearchTaskValue,
    searchedTodos,
    openModal,
    setOpenModal,
    toggleCompleteTodo,
    addTodo,
    deleteTodo,
}) => {
    return(
        // only one tag must be returned 
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchTaskValue={searchTaskValue} setSearchTaskValue={setSearchTaskValue} />
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
                    <TodoForm addTodo={addTodo} />
                </TodoModal>
            )}
            <CreateTodoButtom setOpenModal={setOpenModal} />
        </React.Fragment>  
    );
}

export { TodoMain };