import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    lastid: 0,
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: ++state.lastid,
                title: action.payload.title,
                description: action.payload.description,
                Deadline: action.payload.target,
                completed: false,
            };
            state.value.push(newTask);
        },
        deleteTask: (state, action) => {
            const taskId = action.payload
            state.value = state.value.filter(task => task.id !== taskId);
        },
        completeTask: (state, action) => {
            const taskId = action.payload
            const index = state.value.findIndex(task => task.id === taskId);
            if (index !== -1) {
                state.value[index].status = true;
            }
        }
    },
})
// Action creators are generated for each case reducer function
export const { addTask, deleteTask, completeTask } = taskSlice.actions

export default taskSlice.reducer