import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./taskReducer";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: taskReducer,
    // middleware:composeWithDevTools(applyMiddleware(thunk))
    middleware:[thunk]
});

export default store;