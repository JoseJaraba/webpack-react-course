import React from "react";
import { TodoMain } from "./TodoMain";
import { TodoProvider } from "./TodoContext";

const App = () => {
    return ( 
        <TodoProvider>
            <TodoMain /> 
        </TodoProvider>
    );
} 


export { App };