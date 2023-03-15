/**
 * Root saga
 * @format
 */
import {spawn} from 'redux-saga/effects';

// Screens 
import {commonSagas} from '@app/modules/common';
import {appBootstrapSagas} from '@app/modules/app-bootstrap';
import {authSagas} from '@app/modules/auth';
import {homeSagas} from '@app/modules/home';
import {ProfileSagas} from '@app/modules/profile';
import {NotificationSaga} from '@app/modules/notification';

export function* rootSaga() {
  yield spawn(appBootstrapSagas);
  yield spawn(commonSagas);
  yield spawn(authSagas);
  yield spawn(homeSagas);
  yield spawn(ProfileSagas);
  yield spawn(NotificationSaga);
}
