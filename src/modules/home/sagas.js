/**
 * home sagas
 * @format
 */

import {takeLatest, select, put, call} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

// Screen
import {
  getTransactionsList,
  getAccountDetails,
  getExpense,
  getCategory,
  getMonthExpense,
  getExpenseHistory,
  getAddExpense,
  getPaymentVerfication,
  setTransaction,
  setAccount,
  setExpense,
  setCategory,
  setMonthExpense,
  setExpenseHistory,
  setAddExpense,
  makePayment,
} from './slice';
import {createLoader, selectUser, getUserDetail} from '@app/modules/common';
// import {stripeCompletePaymentUrl} from '@app/config';
import {
  selectTransactionsList,
  selectAccountDetails,
  selectExpense,
  selectCategory,
  selectMonthExpense,
  selectExpenseHistory,
  selectAddExpense,
} from './selectors';

function* TransactionListSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const Transaction = yield select(selectTransactionsList);
    const {_docs} = yield firestore()
      .collection('Transactions')
      .orderBy('date', 'desc')
      .get();
    const Transactions = _docs?.map(({_data}) => {
      return {..._data};
    });
    console.log(Transactions, '--------TransactionsData');
    yield put(setTransaction(Transactions));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* AccountDetailsSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const user = yield select(selectUser);
    const {_docs} = yield firestore()
      .collection('AccountDetails')
      .where('userId', '==', user?.uid)
      .get();
    if (_docs?.[0]?._exists) {
      yield put(setAccount(_docs[0]?._data));
    }
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* ExpenseSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const Expenses = yield select(selectExpense);
    const {_docs} = yield firestore().collection('Expensive').get();
    const Expense = _docs?.map(({_data, id}) => {
      return {..._data, id};
    });
    yield put(setExpense(Expense));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* CategorySaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const categorys = yield select(selectCategory);
    const {_docs} = yield firestore().collection('Category').get();
    const category = _docs?.map(({_data, id}) => {
      return {..._data, id};
    });

    yield put(setCategory(category));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* MonthExpenseSaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {_docs} = yield firestore().collection('MonthExpense').get();
    const monthexpense = _docs?.map(({_data, id}) => {
      return {..._data, id};
    });
    console.log({monthexpense}, 'yyyyyyy');

    const graphData = {
      labels: monthexpense?.map(({month}) => {
        return month;
      }),
      datasets: [
        {
          data: monthexpense?.map(({number}) => {
            return number;
          }),
        },
      ],
    };
    console.log(graphData, 'lllllll');
    yield put(setMonthExpense(graphData));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* ExpenseHistorySaga() {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const expensehistorys = yield select(selectExpenseHistory);
    const {_docs} = yield firestore()
      .collection('ExpenseHistory')
      .orderBy('date', 'desc')
      .get();
    const expensehistory = _docs?.map(({_data, id}) => {
      return {..._data, id};
    });
    yield put(setExpenseHistory(expensehistory));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* AddExpenseSaga({payload}) {
  try {
    const user = yield select(selectUser);
    if (user?.uid) {
      yield firestore()
        .collection('Transactions')
        .doc(user?.uid)
        .update(...payload);
      yield showMessage({
        message: 'Add Expense has been updated',
      });

      yield call(goBack);
    }
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  }
}

function* PaymentVerficationSaga({payload}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {userID, payment_id} = payload;
    const formData = new FormData();
    formData.append('userID', userID);
    formData.append('payment_id', payment_id);
    // const {data} = yield axios.post(stripeCompletePaymentUrl, formData, {
    //   headers: {'Content-Type': 'multipart/form-data'},
    // });
    // if (data?.message) {
    //   yield showMessage({
    //     message: data?.message,
    //     type: 'success',
    //   });
    // }
    yield put(getUserDetail());
  } catch (error) {
  } finally {
    yield put(loader.dismiss());
  }
}
function* MakePaymentSaga({payload}) {
  try {
    const user = yield select(selectUser);
    if (user?.uid) {
      yield firestore()
        .collection('PaymentTransaction')
        .add({
          ...payload,
          userID: user?.uid,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });
      yield showMessage({
        message: 'Payment has been success',
      });
      console.log(payload.amount + payload.availableAmount);
      yield firestore()
        .collection('AccountDetails')
        .doc(user?.uid)
        .update({price: payload.amount + payload.availableAmount});

      yield call(goBack);
    }
  } catch (error) {
    console.log(error);
  }
}

function* homeSagas() {
  yield takeLatest(getTransactionsList, TransactionListSaga);
  yield takeLatest(getAccountDetails, AccountDetailsSaga);
  yield takeLatest(getExpense, ExpenseSaga);
  yield takeLatest(getCategory, CategorySaga);
  yield takeLatest(getMonthExpense, MonthExpenseSaga);
  yield takeLatest(getExpenseHistory, ExpenseHistorySaga);
  yield takeLatest(getAddExpense, AddExpenseSaga);
  yield takeLatest(getPaymentVerfication, PaymentVerficationSaga);
  yield takeLatest(getPaymentVerfication, PaymentVerficationSaga);
  yield takeLatest(makePayment, MakePaymentSaga);
}

export {homeSagas};
