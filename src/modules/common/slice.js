/**
 * Common slice
 * @format
 */

import {createSlice, createAction} from '@reduxjs/toolkit';

import {RoutesSection} from '../../constants';

const initialState = {
  activeSection: RoutesSection.AuthSection,
  loader: false,
  authToken: null,
  user: null,
  theme: null,
  notificationCount: 0,
  savedNotification: [],
  userDetails: null,
  stripeConfiguration: {
    publishableKey: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    changeAppSection(state, action) {
      state.activeSection = action.payload;
    },
    presentLoader(state, action) {
      state.loader = true;
    },
    dismissLoader(state, action) {
      state.loader = false;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setAmount(state, action) {
      state.amount = action.payload;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setSavedNotification(state, action) {
      state.savedNotification = action.payload;
    },
    setStripeConfiguration(state, action) {
      state.stripeConfiguration = {
        publishableKey: '',
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(logoutApp, () => {
      return initialState;
    });
  },
});

// Reducer )--------------------------------------
export const commonReducer = commonSlice.reducer;

// Actions )-------------------------------------
export const {
  changeAppSection,
  presentLoader,
  dismissLoader,
  setAuthToken,
  setUser,
  setTheme,
  setAmount,
  setNotificationCount,
  setSavedNotification,
  setUserDetails,
  setStripeConfiguration,
} = commonSlice.actions;

// Create loader
export const createLoader = () => {
  return {
    present: () => presentLoader(),
    dismiss: () => dismissLoader(),
  };
};

export const logoutApp = createAction('auth/logout');
export const getUserDetail = createAction('HOME/GET_USER_DETAILS');
