import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

const store = configureStore({
    reducer: rootReducer,
    devTools: true
});
// console.log(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;