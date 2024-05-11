import {configureStore} from "@reduxjs/toolkit"
import books from "./books.js" 
import search from "./search.js"
import windowWidth from "./windowWidth.js"
export const store = configureStore({
    reducer: {
        books: books,
        search: search,
        width: windowWidth
    }})