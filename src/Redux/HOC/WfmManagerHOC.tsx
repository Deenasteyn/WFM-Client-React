import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import  WFMHome from '../../WFM/Home'

export default connect(
    (state:any)=>{
        return {
            employeeRequestData:state.employeeRequestData.employeeRequestData
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmployeeRequest:()=>{
                return {type:"Wfm_Action"}
            },updateEmployeeStatus:(employee_id,status)=>{
                console.log(employee_id,status)
                return {type:"UpdateEmployeeRequest",data:{employee_id:employee_id,status:status}}
            }
        },dispatch)
    }
)(WFMHome)