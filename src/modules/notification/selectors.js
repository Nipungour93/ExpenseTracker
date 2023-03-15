/**
 * Notification selectors
 * @format
 */

const notificationReducer = state => state.notificationReducer;

export const selectNotification = state =>
  notificationReducer(state).notification;
