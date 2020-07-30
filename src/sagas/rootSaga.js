import { takeLatest } from 'redux-saga/effects';
import tryUsersList from './users/list';

import {actionTypes as usersActions, actionTypes} from '../features/users';

//take es una especie de watcher  cada uno de los actionstypes que se estam ejecutando
export default function* rootSaga() {
//watcher
yield takeLatest(usersActions.LIST_TRY, tryUsersList);
}