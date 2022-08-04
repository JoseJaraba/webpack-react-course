import React, { useState } from "react";
import { TodoMain } from "./TodoMain";
import { useLocalStorage } from "../utils/useLocalStorage";

// const defaultTodos = [
//     {text:'Cut onions', completed:true},
//     {text:'Take a Platzi course', completed:false},
//     {text:'Cry at night', completed:false}
// ];

const App = () => {
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
    }

    const deleteTodo = (text) => {
        saveTodos(todos.filter(
            todo => todo.text !== text
        ));
    }

    React.useEffect(() => {
        console.log('use effect');
    },[]);

    return ( 
        <TodoMain
            dataStatus={dataStatus}
            totalTodos={totalTodos} 
            completedTodos={completedTodos}
            searchTaskValue={searchTaskValue} 
            setSearchTaskValue={setSearchTaskValue}
            searchedTodos={searchedTodos}
            openModal={openModal}
            setOpenModal={setOpenModal}
            toggleCompleteTodo={toggleCompleteTodo}
            addTodo={addTodo}
            deleteTodo={deleteTodo}
        /> 
    );
} 


export { App };