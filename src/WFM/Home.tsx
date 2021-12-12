import Logout from "../Logout"
// import axios from "axios"
import { useEffect,useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../modaltest.css'

type Employee={

    EmployeeId:number,

    Manager:string,

    wfm_manager:string,

    ReqDate:Date,

    ReqMessage:string
 
}
type emp={
    employeeRequestData:[];
    getEmployeeRequest:()=>{};
    updateEmployeeStatus:(employee_id:number,message:string)=>{};
}

 const WFMHome=({employeeRequestData,getEmployeeRequest,updateEmployeeStatus}:emp)=>{

    useEffect(()=>{
        getEmployeeRequest()
    }  ,[]    
    )
    
    const [status,setstatus]=useState('') 
    const user=localStorage.getItem('username')
    return (
        <>
         <div className = "px-3 py-2 bg-dark text-white">

<div className = "d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">

<h1 className="text-white col col-lg-9">Employee Requests</h1>
<div className = "d-flex flex-row-reverse col col-lg-3"><Logout></Logout><strong className="d-inline p-2 bg-dark text-white">{user}</strong></div>

</div>
 </div>
        <table className="table stripened" >
                <thead style={{background:'royalblue',color:'white'}} >
                    <tr>
                    <th>Employee ID</th>
                    <th>Requestee</th>
                    <th>Requested Date</th>
                    <th>WFM Manager</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeRequestData.map((x:Employee)=>{
                        return(
                            <tr key={x.EmployeeId}>
                                <td>{x.EmployeeId}</td>
                                <td>{x.Manager}</td>
                                <td>{x.ReqDate}</td>
                                <td>{x.wfm_manager}</td>
                                <td>

                                {/* <button className="btn btn-primary" onClick={()=>{updatelockstatus(x.EmployeeId)}}>                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg>
                                Request Lock </button> */}
                                  <Popup trigger={<button className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg> View Detials </button>} modal>
                                {(close:any) => (  
                                            <div>
                                           
                                                    <div className="modal-content">            
                                                        <div className="modal-header modal-header-primary">
                                                            <h5 className="modal-title" id="exampleModalLongTitle">SOFT LOCK REQUEST CONFIRMATION</h5> 
                                                            <button className="close btn btn-secondary" onClick={close}>
                                                                    &times;
                                                                </button>                                
                                                        </div>
                                                    <div className="modal-body">
                                                        <p className="card-text text-primary"><u><strong>Status Update for Request Lock:</strong></u></p>
                                                        <br></br>
                                                        <p className="card-text"><strong className="text-primary">Employee ID: </strong>{x.EmployeeId}</p> 
                                                        <br></br>
                                                        <p className="card-text" ><strong className="text-primary">Requestee: </strong>{x.Manager}</p>
                                                        <br></br>
                                                        <p className="card-text"><strong className="text-primary">Employee Manager: </strong>{x.wfm_manager}</p>
                                                        <br></br>
                                                        <p className="card-text"><strong className="text-primary">Request Description:</strong> {x.ReqMessage}</p>
                                                        <br></br>
                                                        <p className="text-primary"><strong>Status:</strong></p>                                                                                                                                                 
                                                        <select className="form-select1 form-select-lg mb-1"  onChange={(e)=>{setstatus(e.target.value)}}>
                                                            <option key={0}></option>
                                                            <option key={1}>Approve</option>
                                                            <option key={2}>Reject</option>
                                                        </select>  
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" onClick={()=>{close()}}>Close</button>
                                                            <button type="button" className={status.length>0?'btn btn-primary':'disable btn btn-light'} onClick={()=>{updateEmployeeStatus(x.EmployeeId,status);}}>Send Request</button>
                                                         </div>
                                                        
                                                    </div>
                                                </div>
                                                </div>
                                )}
                                </Popup>
                                </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
        </table>
        </>
    )
}

export default WFMHome