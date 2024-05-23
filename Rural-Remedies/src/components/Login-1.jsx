import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

import "./signup.css";
import LoginImg from "../assets/login.jpg";
import { toast } from "react-toastify";






const RegistrationForm = () => {
  

  const {storeTokenLS} = useAuth()

  const navigate  = useNavigate();
 const [user, setUser] = useState({
  email:"",
  password:""
 })

 const handleInput=(e)=>{
  console.log(e)
  let name = e.target.name;
  let value = e.target.value;


  setUser({
    ...user,
    [name]:value
  })
 }


 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)

      
    });

    if(response.ok){
    
      toast.success("Login successfully")

      const res_data = await response.json()
      console.log("response from server",res_data)
      //store token in local storage
      storeTokenLS(res_data.token)
      // localStorage.setItem("token",res_data.token)
      setUser({
        
        email:"",
     
        password:""
      })
     navigate('/')
    }else{
      toast.error("Invalid Credential")
    }


    console.log(response);
  } catch (error) {
    console.error("Error during registration:", error.message);
  }
};

  return (
    <div className="sign-main">
      <div className="sign-container">
        <div className="sign-left">
          <img src={LoginImg} alt="" />
        </div>
        <div className="sign-right d-flex flex-column">
          <form className="sign-form" onSubmit={handleSubmit}>
            <p className="login-logo">Login</p>
           
            <input
              type="email"
              id="email"
              name="email"
              required
              value={user.email}
              onChange={handleInput}
              placeholder="Enter your email"
            />
           
            <input
              type="password"
              id="password"
              name="password"
              required
              value={user.password}
              onChange={handleInput}
              placeholder="Enter your password"
            />

            <button className="login" id="login-button" type="submit"> Sign up </button>
            <a href="#">Forgot Password ?</a>
            <button className="create-account">
              <a href="Signup" className="text-white">
                Create New Account
              </a>
            </button>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
