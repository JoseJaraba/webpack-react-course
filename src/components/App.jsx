import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButtom } from "./CreateTodoButtom";

const todos=[
    {text:'Cut onions', completed:true},
    {text:'Take a Platzi course', completed:true},
    {text:'Cry at night', completed:false}
];

const App = (props) => {
    return (
        // only one tag must be returned 
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TodoList>
            <CreateTodoButtom />
        </React.Fragment>  
    );
} 


export default App;