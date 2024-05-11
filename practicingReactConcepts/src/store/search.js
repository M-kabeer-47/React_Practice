import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: ""
}
const createSearch = createSlice({
    name: "search",
    initialState,
    reducers:{
        updateSearchBook: (state, action)=> {state.search = action.payload}
    }
})

export const {updateSearchBook} = createSearch.actions
export default createSearch.reducer