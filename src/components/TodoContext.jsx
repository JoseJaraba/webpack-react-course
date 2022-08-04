import React from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
    const {
        item: todos,
        saveItem: saveTodos,
        dataStatus
    } = useLocalStorage('TODOS_V1', []);
    const [searchTaskValue, setSearchTaskValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if(!searchTaskValue.length >= 1){
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchTaskValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const toggleCompleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
	    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
	    saveTodos(newTodos);   
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            completed: false,
        });
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        saveTodos(todos.filter(
            todo => todo.text !== text
        ));
    }

    return (
        <TodoContext.Provider value={{
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
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
