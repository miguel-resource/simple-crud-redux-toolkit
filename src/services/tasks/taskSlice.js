import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task example',
    completed: false,
    priority: 'Low level',
    date: 1666999478
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task example',
    completed: false,
    priority: 'High level',
    date: 1666999478
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {}
});

export default taskSlice.reducer