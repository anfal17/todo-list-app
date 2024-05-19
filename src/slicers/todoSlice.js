import { createSlice } from "@reduxjs/toolkit";

const initialState =[];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (todo, action) => {
      let todoText = action.payload.todoText;
      todo.todoList.push({
        id: todo.todoList.length + 1,
        todoData: todoText,
        finished: false,
      });
    },
    editTodo: (todo, action) => {
      let todoPayload = action.payload.todo;
      let todoText = action.payload.todoText;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id == todoPayload.id) {
          todo.todoData = todoText;
        }
        return t;
      });
    },
    todoFinished: (todo, action) => {
      let todoPayload = action.payload.todo;
      let isFinished = action.payload.isFinished;
      todo.todoList = todo.todoList.map((t) => {
        if (t.id == todoPayload.id) {
          todo.isFinished = isFinished;
        }
        return t;
      });
    },
    deleteTodo:(todo, action)=>{
        let todoPayload = action.payload.todo;
        todo.todoList = todo.todoList.filter((t)=>t.id !== todoPayload.id)
        return t;
    }
  },
});


export const {deleteTodo , addTodo, editTodo , todoFinished} = todoSlice.actions;
export default todoSlice.reducer;