
export const loginReducer=(state={username:"NA",token:"NA",usertype:"NA"},action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log('Logiin_success')
            console.log(action.data)
            return {...action.data};
        case "LOGIN_FAILURE":
            console.log(action)
            return {...state,message:"Login Credentials incorrect"}
        default:
            return state
    }
}


export const managerReducer=(state={employeeData:[]},action)=>{
    switch(action.type){
        case "LOAD_EMPLOYEE":
            return {employeeData:action.data};
        case "UPDATED":
            return {employeeData:[]}
        case "FAILURE":
            return {employeeData:[]}
        default:
                 return state;
}
}

export const wfmManagerReducer=(state={employeeRequestData:[]},action)=>{
    switch(action.type){
        case "LOAD_EMPLOYEEREQUEST":
            return {employeeRequestData:action.data};
        case "UPDATED":
                return {employeeRequestData:[]}
        case "FAILURE":
                return {employeeRequestData:[]}
        default:
                 return state;
}
}