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
    const [item, setItem] = React.useState(initialValue);
    const [dataStatus,setDataStatus] = useState({loading:true,error:false})


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem =localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setDataStatus({...dataStatus,loading:false});

            } catch (error) {
                setDataStatus({...dataStatus,error:true})
            }

        }, 1000);
    }, []);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setDataStatus({...dataStatus,error:true})
        }
    }

    return {
        item,
        saveItem,
        dataStatus
    };
}

const App = () => {
    const {
        item: todos,
        saveItem: saveTodos,
        dataStatus
    } = useLocalStorage('TODOS_V1', []);
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

    React.useEffect(() => {
        console.log('use effect');
    },[]);

    return (
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
            <CreateTodoButtom />
        </React.Fragment>  
    );
} 


export default App;