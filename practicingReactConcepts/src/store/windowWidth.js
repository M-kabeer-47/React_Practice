import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    width : 0
}
const createWidth = createSlice({
    name: "width",
    initialState,
    reducers: {
        updateWidth: (state,action)=> state.width = action.payload
    }
})
export const {updateWidth} = createWidth.actions;
export default createWidth.reducer;    
