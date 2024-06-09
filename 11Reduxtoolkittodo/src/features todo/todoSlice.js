import { createSlice, nanoid } from "@reduxjs/toolkit";
//Nano id help to get unique  id

const initialState = {
  todo: [{ id: 1, text: "WORK 1", read: false }], //We always take up the initial value in Slice
};

export const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //creating obj todo cointaing id,text
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      //we will push the new todo inside state
      state.todo.push(todo);
    },
    //Filtering out the todo  from remove function whose id matches will not be there
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

export const { addTodo, removeTodo, updateWork } = todoslice.actions; //Always export the slice action with all reducer
export default todoslice.reducer;
