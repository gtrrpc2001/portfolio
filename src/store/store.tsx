import { configureStore } from "@reduxjs/toolkit";
import { widthSlice } from "./reducers";

export const store = configureStore({
    reducer:{
        width:widthSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch