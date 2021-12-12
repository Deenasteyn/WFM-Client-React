import {takeEvery} from 'redux-saga/effects'
import { loginHandler,managerHandler,wfmManagerHandler } from './handlers'


export function* rootSaga(){
    yield takeEvery("LOGIN_ACTION",loginHandler)
    yield takeEvery("Action",managerHandler)
    yield takeEvery("Update",managerHandler)
    yield takeEvery("Wfm_Action",wfmManagerHandler)
    yield takeEvery("UpdateEmployeeRequest",wfmManagerHandler)


}