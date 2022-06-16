import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    'React hooks',
  ],
  reducers: {
    addTodo(state, action) {
      state.unshift(action.payload);
    },
    subTodo(state, action) {
      state.splice(action.payload, 1);
    }
  }
});

export const { addTodo, subTodo } = todoSlice.actions;
export default todoSlice;