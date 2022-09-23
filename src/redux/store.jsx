import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contatcsSlice";

export const store = configureStore({
  reducer: contactsReducer,
});
