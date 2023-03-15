/**
 * Common sagas  
 * @format
 */

import {takeLatest,put} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {createLoader ,setUser,getUserDetail,setUserDetails} from './slice';

function* setUserSaga({}) {
  const loader = createLoader();
  try {
    yield put(loader.present());
    const {
      _user: {uid},
    } = yield auth().currentUser;
    const {_data} = yield firestore().collection('users').doc(uid).get();
    console.log({..._data});
    yield put(setUserDetails({..._data}));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(loader.dismiss());
  }
}
function* commonSagas() {
  yield takeLatest(getUserDetail, setUserSaga);
}

export {commonSagas};
