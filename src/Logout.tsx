const Logout=()=>{  
    return(
        <a href='/login' onClick={()=>localStorage.clear()} className="btn btn-primary btn-sm Logout">
         Log out</a>
    )
}

export default Logout;