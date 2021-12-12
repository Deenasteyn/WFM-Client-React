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
    console.log("EmployeeId")
    console.log(action)
    try{
      let  result = yield call(axios.post,"http://localhost:8000/users/updateStatus",{employee_id:action.data.employee_id,requestmessage:action.data.message})
      console.log(result)

        } 
      catch(e){
          yield put({type:"FAILURE"})
      }
  } 
  if (action.type==="Action")
  {
  try{
    console.log(localStorage.getItem('usertype'))
    let  result = yield call(axios.get,"http://localhost:8000/users/manager",{manager:localStorage.getItem('username')})
    console.log(result.data)
    
    yield put({type:"LOAD_EMPLOYEE",data: result.data})
      } 
    catch(e){
        yield put({type:"FAILURE"})
    }
  } 
  
}

export function* wfmManagerHandler(action){
  console.log('Called here 60')   
   
  if (action.type==="Wfm_Action")
  {
  try{
    
    let  result = yield call(axios.get,"http://localhost:8000/users/wfm_manager")
    console.log(result.data)
    yield put({type:"LOAD_EMPLOYEEREQUEST",data: result.data})
      } 
    catch(e){
        yield put({type:"FAILURE"})
    }
  } 

  if (action.type==="UpdateEmployeeRequest")
  {
    console.log("EmployeeId")
    console.log(action)
    try{
      let  result = yield call(axios.post,"http://localhost:8000/users/updateApprovalStatus",{employee_id:action.data.employee_id,status:action.data.status})
      console.log(result)
      yield put({type:"LOAD_EMPLOYEEREQUEST",data: result.data})
        } 
      catch(e){
          yield put({type:"FAILURE"})
      }
  }
  
}
