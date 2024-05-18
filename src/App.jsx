import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import { useReducer } from "react";
import TodoDispatchContext from "./context/TodoDispatchContext";

function App() {
  // const[list , setList] = useState([
  //   {id:1, todoData:'todo 1' , finished:false},
  //   {id:2, todoData:'todo 2'
  //   , finished:true},
  // ])

  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
