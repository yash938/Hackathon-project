// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext  = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{

    const [token,setToken]=useState(localStorage.getItem("token"))
   const [user, setUser] = useState("")
   const authorizationToken = `Bearer ${token}`
    const storeTokenLS = (serverToken)=>{
  localStorage.setItem("token",serverToken)
  setToken(serverToken);
    }

    let isLoggedIn = !!token
    console.log("isloggedIn",isLoggedIn)

//taking logout functionality 
const LogoutUser = (serverToken)=>{
setToken(serverToken)
return localStorage.removeItem("token")
}

//to get the currently logged in user data


const userAuthentication = async()=>{
    try {
        const response = await fetch(`http://localhost:3000/user/users`,{
            method:"GET",
            headers:{
                Authorization:authorizationToken
            }
        })
        if(response.ok){
            const data = await response.json();
            console.log("userData",data.userData)
setUser(data.userData)
        }
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    userAuthentication()
},[])

    return <AuthContext.Provider value={{isLoggedIn,storeTokenLS,LogoutUser,user,authorizationToken}}>
        {children}
    </AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth use outisde the provider")
    }
    return authContextValue;
}