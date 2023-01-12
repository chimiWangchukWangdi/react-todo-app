import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.task;

export const selectTaskList = createSelector(selectTask, (state) => state.taskList);