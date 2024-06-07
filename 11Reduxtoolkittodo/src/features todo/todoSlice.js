import { createSlice, nanoid } from "@reduxjs/toolkit";
//Nano id help to get unique  id

const initialState = {
  todo: [{ id: 1, text: "WORK 1", read: false }],
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(todo);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
    // updateWork: (state, action) => {
    //   state.todo.map((todo) => {
    //     if (todo.id == action.payload) {
    //       if (todo.read == false) {
    //         todo.read = true;
    //       } else {
    //         todo.read = false;
    //       }
    //     }
    //   });
    // },
  },
});

export const { addTodo, removeTodo, updateWork } = todoslice.actions;
export default todoslice.reducer;
