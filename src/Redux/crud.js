import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data";

export const crud = createSlice({
    name: "crud",
    initialState: data,
    reducers: {
        handleDelete: (state, action) => {
            const { id } = action.payload;
            return state.filter((e) => {
                return e.id !== id;
            });        
        },
        add:(state,action)=>{
            const newData=action.payload
            return [...state,{id:newData.id,text:newData.text}]
        }
    },
});

export const {add, handleDelete } = crud.actions;
export default crud.reducer;
