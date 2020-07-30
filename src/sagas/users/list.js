import { call, put } from 'redux-saga/effects';
import {actionTypes as usersActions} from '../../features/users';

export default function* tryUsersList() {
    try {
        //consume API
        const URl = 'https://jsonplaceholder.typicode.com/users';
        const response = yield call(fetch, URl);
        const data = yield call([response, 'json']);

        //dispatch succes action
        yield put({ type: usersActions.LIST_SUCCES, data });
    } catch (error) {
        //if error dispatch failed
        yield put({ type: usersActions.LIST_FAILED });
    }
}