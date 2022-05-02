// action types
import axios from"axios"

export const User="User";

// Action Creators
export const user=(name,pass)=>{
    axios.get("http://localhi=ost:8080/users",{
        params:{username:name,
        pass:pass}
    }).then((d)=>dispatchEvent(setUser(d.data)))
}

export const setUser=(data)=>{
    return{
        type:User,
        payload:data
    }
}