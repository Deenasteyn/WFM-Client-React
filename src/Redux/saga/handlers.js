import axios from 'axios'
import {call,put} from 'redux-saga/effects'


export function* loginHandler(action){
    try{
 let  result = yield call(axios.post,"http://localhost:8000/users/signin",action.data)
 console.log(result.data)

 localStorage.setItem("username",result.data.username)
 localStorage.setItem("usertype",result.data.usertype)
 localStorage.setItem("token",result.data.token)

 yield put({type:"LOGIN_SUCCESS",data: 
  {
     username:result.data.username,
     usertype:result.data.usertype,
     token: result.data.token
  }})
    } 
  catch(e){
      yield put({type:"LOGIN_FAILURE"})
  }
 
}



export function* managerHandler(action){
  console.log('Called here')   
  if (action.type==="Update")
  {
    try{
      let  result = yield call(axios.post,"http://localhost:8000/users/updateLockStatus",{employee_id:action.data.employee_id,requestmessage:action.data.message})
      result = yield call(axios.post,"http://localhost:8000/users/employeedata",{manager:localStorage.getItem('username')})
      if (result!=='No Data Found')
      {
        yield put({type:"LOAD_EMPLOYEE",data: result.data})
      }
      else{
        yield put({type:"FAILURE"})
      }
  
        } 
      catch(e){
          yield put({type:"FAILURE"})
      }
  } 
  if (action.type==="Action")
  {
  try{

    let  result = yield call(axios.post,"http://localhost:8000/users/employeedata",{manager:localStorage.getItem('username')})
      if (result!=='No Data Found')
      {
        yield put({type:"LOAD_EMPLOYEE",data: result.data})
      }
      else{
        yield put({type:"FAILURE"})
      }
      } 
    catch(e){
        yield put({type:"FAILURE"})
    }
  } 
  
}

export function* wfmManagerHandler(action){

   
  if (action.type==="Wfm_Action")
  {
  try{
    let  result = yield call(axios.post,"http://localhost:8000/users/employeeRequestData",{wfm_manager:localStorage.getItem('username')})
    if (result!=='No Data Found')
      {
    yield put({type:"LOAD_EMPLOYEEREQUEST",data: result.data})
      } 
      else{
        yield put({type:"FAILURE"})
      }
    }
    catch(e){
        yield put({type:"FAILURE"})
    }
  } 

  if (action.type==="UpdateEmployeeRequest")
  {
    
    try{
      let  result = yield call(axios.post,"http://localhost:8000/users/updateApprovalStatus",{employee_id:action.data.employee_id,status:action.data.status})
      result = yield call(axios.post,"http://localhost:8000/users/employeeRequestData",{wfm_manager:localStorage.getItem('username')})
      if (result!=='No Data Found')
      {
        yield put({type:"LOAD_EMPLOYEEREQUEST",data: result.data})
      }
      else{
        yield put({type:"FAILURE"})
      }
  
        } 
      catch(e){
          yield put({type:"FAILURE"})
      }
  }
  
}
