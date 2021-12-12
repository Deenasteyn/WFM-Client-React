import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagerHome from '../../Managers/Home';

export default connect(
    (state:any)=>{
        return {
           employeeData:state.employeeData.employeeData
        }
    },
    (dispatch)=>{
        return bindActionCreators({
            getEmployee:()=>{
                return {type:"Action"}
            },updatelockstatus:(employee_id,message)=>{
                console.log('called hoc')
                console.log(employee_id)
                return {type:"Update",data:{employee_id:employee_id,message:message}}
            }
        },dispatch)
    }
)(ManagerHome)