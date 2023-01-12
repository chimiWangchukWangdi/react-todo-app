import { createSlice } from '@reduxjs/toolkit'
import * as actions from './action'

const initialState = {
  taskList: [],
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actions.addTask, (state, action) => {
        const result = [...state.taskList]
        result.push(action.payload)
        return {...state, taskList: result };
    })
    .addCase(actions.deleteTask, (state, action) => {
        const filterResult = [...state.taskList].filter(value => value.id !== action.payload);
        return {...state, taskList: filterResult};
    })
    .addCase(actions.editTask, (state, action ) => {
        const result = [...state.taskList];
        result[action.editTask.id] = action.editTask.payload; 
        return {...state, taskList: result};
    })
    .addCase(actions.setAllTask, (state, action) => {
        return {...state, taskList: action.payload }
    })
  }
})

// Action creators are generated for each case reducer function

export default taskSlice.reducer;