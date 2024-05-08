import {configureStore} from "@reduxjs/toolkit"
import counter from "./states/counter"
export const store = configureStore({
    reducer:{
        counter: counter
    }
})