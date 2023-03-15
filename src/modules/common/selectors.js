/**
 * Common selectors
 * @format
 */

const commonReducer = state => state.commonReducer;

export const selectActiveSection = state => commonReducer(state).activeSection;

export const selectUser = state => commonReducer(state).user;

export const selectLoader = state => commonReducer(state).loader;

export const selectAmount = state => commonReducer(state).amount;

export const selectUserDetails = state => commonReducer(state).userDetails;

export const selectNotificationCount = state =>
  commonReducer(state).notificationCount;

export const selectSavedNotification = state =>
  commonReducer(state).savedNotification;

export const selectStripeConfiguration = state =>
  commonReducer(state).stripeConfiguration;
