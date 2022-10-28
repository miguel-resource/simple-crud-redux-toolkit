import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './../services/tasks/taskSlice';

export const store = configureStore({
   reducer: {
     tasks: tasksReducer,
   }
});
