import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";
import { TodoModal } from "./TodoModal";
import { TodoForm } from "./TodoForm";
import { TodoContext } from "./TodoContext";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmptyTodos } from "./EmptyTodos";

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
                {dataStatus.error && <TodosError error={error} />}
                {dataStatus.loading && Array(3).fill(1).map((a, i) => <TodosLoading key={i} />)}
                {(!dataStatus.loading && !searchedTodos.length) && <EmptyTodos />}
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