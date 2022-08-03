import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";

const defaultTodos = [
    {text:'Cut onions', completed:true},
    {text:'Take a Platzi course', completed:false},
    {text:'Cry at night', completed:false}
];

const App = (props) => {
    const [todos, setTodos] = React.useState(defaultTodos);
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

    return (
        // only one tag must be returned 
        <React.Fragment>
            <TodoCounter total={totalTodos} completed={completedTodos}/>
            <TodoSearch searchTaskValue={searchTaskValue} setSearchTaskValue={setSearchTaskValue} />
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TodoList>
            <CreateTodoButtom />
        </React.Fragment>  
    );
} 


export default App;