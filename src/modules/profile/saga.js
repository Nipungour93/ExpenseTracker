/**
 * Profile sagas
 * @format
 */

import {takeLatest, put, call, select} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

// Screen
import {createLoader, getUserDetail, selectUser} from '@app/modules/common';
import {editProfile, changePassword, deleteProfile} from './slice';
import {goBack} from '@app/navigation/navigation-service';

/**
 * update user profile
 * @param {*} currentPass
 * @param {*} newPassword
 */
function* ChangePasswordSaga({payload}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {currentPass, newPassword} = payload;
    const {email} = yield select(selectUser);
    // const emailCred = yield firebase.auth.EmailAuthProvider.credential(
    //   email,
    //   currentPass,
    // );
    // yield auth().currentUser.reauthenticateWithCredential(emailCred);
    // yield auth().currentUser.updatePassword(newPassword);
    yield showMessage({
      message: 'Password has been updated',
    });
    yield call(goBack);
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

/**
 * update user profile
 * @param {*} payload
 */
function* editProfileSaga({payload}) {
  const loader = createLoader();

  try {
    yield put(loader.present());
    const user = yield select(selectUser);
    if (user?.uid) {
      yield firestore().collection('users').doc(user?.uid).update(payload);
      yield showMessage({
        message: 'Profile has been updated',
      });
      yield put(getUserDetail());
      yield call(goBack);
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

/**
 * delete user profile
 * @param {*} payload
 */
function* deleteProfileSaga({payload}) {
  const loader = createLoader();

  try {
    yield put(loader.present());
    const {uid} = yield auth().currentUser;
    // if (uid) {
    //   const formData = new FormData();
    //   formData.append('user_id', uid);
    //   const {data} = yield axios.post(config.deleteAccount, formData, {
    //     headers: {'Content-Type': 'multipart/form-data'},
    //   });
    //   yield put(changeAppSection(RoutesSection.AuthSection));
    // }
  } catch ({code, message, error}) {
    yield showMessage({
      message,
      type: 'danger',
    });
  } finally {
    yield put(loader.dismiss());
  }
}

function* ProfileSagas() {
  yield takeLatest(editProfile, editProfileSaga);
  yield takeLatest(changePassword, ChangePasswordSaga);
  yield takeLatest(deleteProfile, deleteProfileSaga);
}

export {ProfileSagas};
