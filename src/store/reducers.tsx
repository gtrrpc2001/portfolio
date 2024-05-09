import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const widthSlice = createSlice({
    name:"width",
    initialState:Number,
    reducers:{
        Width: (state,action:PayloadAction<number>) => state = action.payload
    }
});

export const {Width} = widthSlice.actions;