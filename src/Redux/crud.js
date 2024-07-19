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
        },
        uptate:(state,action)=>{
            
            const {upText,test}=action.payload
            const data=state.find(e=>e.id===test)
            if(data){
                data.text=upText
            }
            

        }
    },
});

export const {add, handleDelete,uptate} = crud.actions;
export default crud.reducer;
