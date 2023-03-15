/**
 * book selectors
 * @format
 */

const homeReducer = state => state.homeReducer;

export const selectTransactionsList = state => homeReducer(state).transactions;
export const selectAccountDetails = state => homeReducer(state).accountDetail;
export const selectExpense = state => homeReducer(state).Expense;
export const selectCategory = state => homeReducer(state).category;
export const selectMonthExpense = state => homeReducer(state).monthexpense;
export const selectExpenseHistory = state => homeReducer(state).expensehistory;
export const selectAddExpense = state => homeReducer(state).addExpense;


