import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./states/counter.js"
export const store = configureStore({
    reducer: {counter :counterReducer}
})