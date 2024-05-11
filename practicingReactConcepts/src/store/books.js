import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books : []
}
const createBooks = createSlice({
    name : "books",
    initialState,
    reducers: {
        add: (state,action)=>{
            state.books.push(action.payload)
        },
        remove: (state,action)=>{
            state.books.splice(action.payload,1)
        }
        
        
    }
})
export const {add,remove} = createBooks.actions
export default createBooks.reducer