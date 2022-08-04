import React from "react";
import { TodoMain } from "./TodoMain";
import { TodoProvider } from "./TodoContext";

// const defaultTodos = [
//     {text:'Cut onions', completed:true},
//     {text:'Take a Platzi course', completed:false},
//     {text:'Cry at night', completed:false}
// ];

const App = () => {
    return ( 
        <TodoProvider>
            <TodoMain /> 
        </TodoProvider>
    );
} 


export { App };