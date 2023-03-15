/**
 * home slice
 * @format
 */

import {createSlice, createAction} from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  Expense: [],
  category: [],
  expensehistory: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTransaction(state, action) {
      state.transactions = action.payload;
    },
    setAccount(state, action) {
      state.accountDetail = action.payload;
    },
    setExpense(state, action) {
      state.Expense = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setMonthExpense(state, action) {
      state.monthexpense = action.payload;
    },
    setExpenseHistory(state, action) {
      state.expensehistory = action.payload;
    },
    // setAddExpense(state, action) {
    //   state.addExpense = action.payload;
    // },
  },
});

// // Reducer )---------------------------------
export const homeReducer = homeSlice.reducer;

// // Actions )-------------------------------------
export const {
  setTransaction,
  setAccount,
  setExpense,
  setCategory,
  setMonthExpense,
  setExpenseHistory,
  setAddExpense,
} = homeSlice.actions;

export const getTransactionsList = createAction('GET_TRANSACTIONS');
export const getAccountDetails = createAction('GET_ACCOUNTDETAILS');
export const getExpense = createAction('GET_EXPENSE');
export const getCategory = createAction('GET_CATEGORY');
export const getMonthExpense = createAction('GET_MONTHEXPENSE');
export const getExpenseHistory = createAction('GET_EXPENSEHISTORY');
export const getAddExpense = createAction('GET_ADDEXPENSE');
export const getPaymentVerfication = createAction('GET_PAYMENT_VERIFICATION');
export const makePayment = createAction('MAKE_PAYMENT');
