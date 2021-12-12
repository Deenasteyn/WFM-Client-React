import React from "react";
import { Route, Redirect } from "react-router-dom";
import MangerHOC from "./Redux/HOC/MangerHOC";
import WfmManagerHOC from "./Redux/HOC/WfmManagerHOC";



const ProtectedRoute = ({ children, ...rest }:any) => {
  const token= localStorage.getItem("token");
  const usertype =  localStorage.getItem("usertype")

  console.log(token,'token')
  return (
    <Route
      {...rest}
      render={({ location }) =>
      token? usertype==="manager"?(<MangerHOC/>):(<WfmManagerHOC />) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
