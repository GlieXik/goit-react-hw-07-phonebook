import { configureStore } from "@reduxjs/toolkit";

import { persistStore } from "redux-persist";
import { dataReduser } from "./contatcsSlice";
export const store = configureStore({
  reducer: dataReduser,
});
export const persistor = persistStore(store);
