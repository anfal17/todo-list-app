import { createStore, combineReducers } from "redux";

//reducer import
import todoReducer from "./reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({ todo: todoReducer });

const store = configureStore({
    reducer:{
        todo: todoReducer
    },
    devTools:true
    
});

export default store;
