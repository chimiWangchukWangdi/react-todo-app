import { createAction } from "@reduxjs/toolkit";

export const addTask = createAction('[task] add task', (payload) => ({payload}));
export const editTask = createAction('[task] edit task', (payload) => ({payload}));
export const deleteTask = createAction('[task] delete task', (payload) => ({payload}));
export const setAllTask = createAction('set all task', (payload) => ({payload}));