/**
 * Notification sagas
 * @format
 */

import {takeLatest, select, put} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';

// Screens
import {createLoader, selectUser} from '@app/modules/common';
import {getNotification, setNotification} from './slice';
import {selectNotification} from './selectors';
import {
  setSavedNotification,
  selectSavedNotification,
  setNotificationCount,
} from '@app/modules/common';
import dayjs from 'dayjs';

function* getNotificationSaga() {
  const loader = createLoader();
  // try {
  //   yield put(loader.present());
  //   const savedNotificationLength = yield select(selectSavedNotification);
  //   const user = yield select(selectUser);
  //   const dateFormat = dayjs(user?.createdAt).format('YYYY-MM-DD');
  //   const userCreateDate = new Date(dateFormat);
  //   const {_docs} = yield firestore()
  //     .collection('Notification')
  //     .where('timestamp', '>=', userCreateDate)
  //     .get();

  //   const notifications = _docs?.map(({_data, id}) => {
  //     return {
  //       ..._data,
  //       ...{id, timestamp: _data?.timestamp.toDate().toLocaleDateString()},
  //     };
  //   });
  //   if (savedNotificationLength?.length) {
  //     if (savedNotificationLength?.length < notifications?.length) {
  //       const countLength =
  //         notifications?.length - savedNotificationLength?.length ?? 0;
  //       yield put(setNotificationCount(countLength));
  //     }
  //   }
  //   yield put(setNotification(notifications));
  //   yield put(setSavedNotification(notifications));
  // }
  try {
    yield put(loader.present());
    const Notifications = yield select(selectNotification);
    const {_docs} = yield firestore().collection('Notification').get();
    const Notification = _docs?.map(({_data, id}) => {
      return {..._data};
    });
    console.log(Notification,"--------NotificationData")
    yield put(setNotification(Notification));
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* NotificationSaga() {
  yield takeLatest(getNotification, getNotificationSaga);
}

export {NotificationSaga};
