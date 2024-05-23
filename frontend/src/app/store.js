import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from '../features/projects/projectsSlice'
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})