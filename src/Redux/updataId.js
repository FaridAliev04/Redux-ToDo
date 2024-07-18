import { createSlice } from "@reduxjs/toolkit";

export const updataId = createSlice({
    name: "updataId",
    initialState: "",
    reducers: {
        upId:(state,action)=>{
            const newData=action.payload
            return newData.id
        },
        none:(state,action)=>{
            return ""
        }
    },
});

export const {upId,none } = updataId.actions;
export default updataId.reducer;