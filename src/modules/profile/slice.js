/**
 * Profile slice
 * @format
 */

import {createAction} from '@reduxjs/toolkit';

export const editProfile = createAction('PROFILE/EDIT_PROFILE');
export const changePassword = createAction('PROFILE/CHANGE_PASSWORD');
export const deleteProfile = createAction('PROFILE/DELETE_PROFILE');
