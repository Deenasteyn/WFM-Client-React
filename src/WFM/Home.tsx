import Logout from "../Logout"
// import axios from "axios"
import { useEffect,useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


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

    return (
        <>
        <h1>WFM Home</h1>
        <Logout></Logout>
        <table className="table">
                <thead>
                    <tr>
                    <th>Employee ID</th>
                    <th>Requestee</th>
                    <th>Requested Date</th>
                    <th>WFM Manager</th>
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
                                  <Popup trigger={<button className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg> Request Lock </button>} modal>
                                            <div>
                                           
                                                    <div className="modal-content">            
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLongTitle">SOFT LOCK REQUEST CONFIRMATION</h5>                              
                                                        </div>
                                                    <div className="modal-body">
                                                        <p>Employee ID</p>{x.EmployeeId}
                                                        <br></br>
                                                        <p>Requestee</p>{x.Manager}
                                                        <br></br>
                                                        <p>Employee Manager</p>{x.wfm_manager}
                                                        <br></br>
                                                        <p>Request Description</p>{x.ReqMessage}
                                                        <br></br>
                                                        <p>Status</p>   {status}                                                     
                                                        <select onChange={(e)=>{setstatus(e.target.value)}}>
                                                            <option key={0}></option>
                                                            <option key={1}>Approve</option>
                                                            <option key={2}>Reject</option>
                                                        </select>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary" onClick={()=>{updateEmployeeStatus(x.EmployeeId,status)}}>Send Request</button>
                                                         </div>
                                                        
                                                    </div>
                                                </div>
                                                </div>
                                        
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