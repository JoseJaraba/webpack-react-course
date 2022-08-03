import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";

// const defaultTodos = [
//     {text:'Cut onions', completed:true},
//     {text:'Take a Platzi course', completed:false},
//     {text:'Cry at night', completed:false}
// ];

const useLocalStorage = (itemName, initialValue) => {
    const localStorageItem =localStorage.getItem(itemName);
    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }

    return [
        item,
        saveItem
    ];
}

const App = () => {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchTaskValue, setSearchTaskValue] = React.useState('');

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

    const deleteTodo = (text) => {
        saveTodos(todos.filter(
            todo => todo.text !== text
        ));
    }

    return (
        // only one tag must be returned 
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchTaskValue={searchTaskValue} setSearchTaskValue={setSearchTaskValue} />
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={() => toggleCompleteTodo(todo.text)} onDelete={() => deleteTodo(todo.text)} />
                ))}
            </TodoList>
            <CreateTodoButtom />
        </React.Fragment>  
    );
} 


export default App;