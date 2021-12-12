import Logout from "../Logout"
// import axios from "axios"
import { useEffect,useState } from "react"
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../modaltest.css'


type Employee={
EmployeeId:number;
Name: number; 
Skills:string; 
Experience: number;
Manager:string
 
}
type emp={
    employeeData:[];
    getEmployee:()=>{};
    updatelockstatus:(employee_id:number,message:string)=>{};
}


 const ManagerHome=({employeeData,getEmployee,updatelockstatus}:emp)=>{

    useEffect(()=>{
    getEmployee()
    }  ,[]    
    )
    
     const [message,setmessage] =useState('')
    console.log(employeeData)
    return (
        <>
        <h1>Managers Home</h1>

        <Logout></Logout>
        <table className="table">
                <thead>
                    <tr key='2342'>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Manager</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {
                        employeeData.map((x:Employee)=>{
                        return(
                            <tr key={x.EmployeeId}>
                                <td>{x.Name}</td>
                                <td>{x.Experience}</td>
                                <td>{x.Skills}</td>
                                <td>{x.Manager}</td>
                                <td>

                                {/* <button className="btn btn-primary" onClick={()=>{updatelockstatus(x.EmployeeId)}}>                               
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg>
                                Request Lock </button> */}
                                  <Popup trigger={<button className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                </svg> Request Lock </button>} modal>
                                         {(close:any) => (  
                                                 <div>
                                           
                                                    <div className="modal-content">            
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalLongTitle">SOFT LOCK REQUEST CONFIRMATION</h5>   
                                                            <button className="close" onClick={close}>
                                                        
                                                                </button>                           
                                                        </div>
                                                    <div className="modal-body">
                                                        {/* <form onSubmit={(e)=>{console.log(e.target.value);updatelockstatus(x.EmployeeId)}}> */}
                                                         Please confirm the lock request for <b>{x.Name}</b>
                                                         <br>
                                                         </br>
                                                         Request Message(Message must be 10 char long)
                                                         <br></br>
                                                         <input value={message} name='reqmessage' onChange={(e)=>{setmessage(e.target.value)} }></input>
                                                        <br></br>
                                                        <br></br> 
                                                        <div className="modal-footer">
                                                        
                                                            <button type="button" className="btn btn-secondary" onClick={()=>{close()}}>Close</button>
                                                            <button type="button" className="btn btn-primary" onClick={()=>{updatelockstatus(x.EmployeeId,message)}}>Send Request</button>
                                                        
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

export default ManagerHome