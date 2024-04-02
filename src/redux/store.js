import { configureStore } from '@reduxjs/toolkit'
import Task from './Task'

export const store = configureStore({
  reducer: {
    tasks: Task,
  },
})