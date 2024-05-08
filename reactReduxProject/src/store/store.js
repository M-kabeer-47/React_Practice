import {configureStore} from "@reduxjs/toolkit"
import tasks from "./toDos.js"
export const store = configureStore({
    reducer: {
        toDos: tasks
    }
})