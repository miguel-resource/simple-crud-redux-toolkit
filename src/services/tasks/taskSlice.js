import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task example',
    completed: true,
    priority: 'low',
    date: "29/10/2022"
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task example',
    completed: false,
    priority: 'high',
    date: "29/10/2022"
  }
]

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      const taskFounded = state.find((task) => task.id === action.payload)
      if (taskFounded) {
        state.splice(state.indexOf(taskFounded), 1);
      }
    },
    editTask: (state, action) => {
      const id = action.payload.id
      const taskEdit = action.payload
      const taskIndex = state.findIndex(task => task.id === id);

      state[taskIndex].title = taskEdit.title
      state[taskIndex].description = taskEdit.description
      state[taskIndex].priority = taskEdit.priority

    }
  }
});

export const { addTask, deleteTask, editTask } = taskSlice.actions
export default taskSlice.reducer