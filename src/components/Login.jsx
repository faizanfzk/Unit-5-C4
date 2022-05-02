import { useState } from "react";

import { Navigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { user } from "../Redux/action";
export const Login = () => {
    const auth=useSelector((store)=>store.users)
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("")
    const dispatch=useDispatch()
    const handleAuth=()=>{
        dispatch(user({name,pass}))
    }
    return (

      <div>
        <input onChange={(e)=>setUser(e.target.value)}
          className="username"
          type="text"
          name="username"
          placeholder="Enter Username"
        />
        <input onClick={(e)=>setPass(e.target.value)}
          className="password"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        {/* On this button click make network req to find user with same username and password */}
        {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
        {auth.role==="admin" ? <Navigate to ="/orders"/> : <Navigate to="/neworder"/>}
        <button onClick={()=>{
            handleAuth
        }}
          
         className="submit">Login</button>
      </div>
    );
  };
  