import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "../signup.css";
import LoginImg from "../../assets/login.jpg";
import { useAuth } from "../../store/auth";

const AdminS = () => {
  const { storeTokenLS } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    isDoctor: false,
    registrationNumber: ""
  });

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/admin/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        toast.success("Registration successful");
        const resData = await response.json();
        storeTokenLS(resData.token);
        setUser({
          username: "",
          email: "",
          contact: "",
          password: "",
          isDoctor: false,
          registrationNumber: ""
        });
        navigate("/AdminLogin");
      } else {
        toast.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <>
      <div className="sign-main">
        <div className="sign-container">
          <div className="sign-left">
            <img src={LoginImg} alt="" />
          </div>
          <div className="sign-right d-flex flex-column">
            <form className="sign-form" onSubmit={handleSubmit}>
              <p className="login-logo">Register</p>
              <input
                type="text"
                id="name"
                name="username"
                required
                value={user.username}
                onChange={handleInput}
                placeholder="Enter your name"
                maxLength={20}
              />
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
                className="contact-input"
                type="text"
                id="contact"
                name="contact"
                required
                value={user.contact}
                onChange={handleInput}
                placeholder="Enter your Phone No."
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
              <div className="checkbox-container">
                <label htmlFor="isDoctor">Are you a doctor?</label>
                <input
                  type="checkbox"
                  id="isDoctor"
                  name="isDoctor"
                  checked={user.isDoctor}
                  onChange={handleInput}
                />
              </div>
              {user.isDoctor && (
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  required
                  value={user.registrationNumber}
                  onChange={handleInput}
                  placeholder="Enter your registration number"
                />
              )}
              <button className="login" id="login-button" type="submit">
                Sign up
              </button>
              <a href="/AdminLogin">Login</a>
              <button className="create-account">
                <a href="Signup" className="text-white">
                  Create New Account
                </a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminS;
