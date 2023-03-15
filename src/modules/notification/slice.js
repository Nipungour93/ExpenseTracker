/**
 * Notification slice
 * @format
 */

/**
 * Market slice
 * @format
 */

import {createSlice, createAction} from '@reduxjs/toolkit';

const initialState = {
  notification: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
  },
});

// Reducer )--------------------------------------
export const notificationReducer = notificationSlice.reducer;

// Actions )-------------------------------------
export const {setNotification} = notificationSlice.actions;

export const getNotification = createAction('NOTIFICATION/GET_NOTIFICATION');
