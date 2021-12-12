const Logout=()=>{  
    localStorage.clear()
    return(
        <a href='/login' className="btn btn-default btn-sm Logout">
        <span className="fa fa-sign-out"></span> Log out</a>
    )
}

export default Logout;