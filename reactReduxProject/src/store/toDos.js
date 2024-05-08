import { createSlice } from "@reduxjs/toolkit"
// import { act } from "react"

const initialState ={
    taskList : []
}
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
        add: ((state,action)=>{
            state.taskList.push(action.payload)
        }),
        remove: ((state,action)=>{
            //   console.log(action.payload);
            state.taskList.splice(action.payload,1)
        })
    }
})
export const {add,remove} = taskSlice.actions
export default taskSlice.reducer;