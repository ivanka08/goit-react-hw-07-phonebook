
import { combineReducers } from "@reduxjs/toolkit";

import contactsReduce from "./slices/contactSlice";
import filterReducer from "./slices/filterSlice";


const rootReducer = combineReducers({
    contacts: contactsReduce,
    filter: filterReducer,
})


export default rootReducer;