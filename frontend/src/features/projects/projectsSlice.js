import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things."
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza."
    }
]

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        projectAdded: (state, action) => {
            state.push(action.payload)
        } 
    }
})

export const selectAllProjects = (state) => state.projects;

export const { projectAdded } = projectsSlice.actions;

export default projectsSlice.reducer;
