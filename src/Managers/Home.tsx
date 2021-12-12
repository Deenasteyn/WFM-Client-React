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
   
    console.log(employeeData)
     const [message,setmessage] =useState('')
     const user=localStorage.getItem('username')
    return (
        <>
       <div className = "px-3 py-2 bg-dark text-white">

       <div className = "d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">

<h1 className="text-white col col-lg-9">Available Emaployee</h1>
<div className = "d-flex flex-row-reverse col col-lg-3"><Logout></Logout><strong className="d-inline p-2 bg-dark text-white">{user}</strong></div>


</div>
        </div>
        
        <table className="table" >
                <thead style={{background:'royalblue',color:'white'}}>
                    <tr >
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Skills</th>
                    <th>Manager</th>
                    <th></th>
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
                                                        <div className="modal-header modal-header-primary">
                                                            <h5 className="modal-title" id="exampleModalLongTitle">SOFT LOCK REQUEST CONFIRMATION</h5>   
                                                            <button className="close btn btn-secondary" onClick={close}>
                                                                    &times;
                                                                </button>                           
                                                        </div>
                                                    <div className="modal-body">
                                                        {/* <form onSubmit={(e)=>{console.log(e.target.value);updatelockstatus(x.EmployeeId)}}> */}
                                                         Please confirm the lock request for <b>{x.Name}</b>
                                                         <br>
                                                         </br>
                                                         Request Message(Message must be 30 char long)
                                                         <br></br>
                                                         <textarea className="form-control" value={message} maxLength={30} name='reqmessage' onChange={(e)=>{setmessage(e.target.value)} }></textarea>
                                                        <br></br>
                                                        <br></br> 
                                                        <div className="modal-footer">
                                                        
                                                            <button type="button" className="btn btn-secondary" onClick={()=>{close()}}>Close</button>
                                                            <button type="button" className={message.length>0?'btn btn-primary':'disable btn btn-light'} onClick={()=>{updatelockstatus(x.EmployeeId,message)}}>Send Request</button>
                                                        
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