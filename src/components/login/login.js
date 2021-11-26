import React, { useState } from "react";
import "./login.css";
import axios from "axios";

import { useHistory } from "react-router";

const Login = ({setLoginUser}) => {

  const history=useHistory();

  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };

const login=()=>{

  const{email,password}=user

  //axios.post("http://localhost:3002/login",user)

  axios.post("https://raksha05145.herokuapp.com/login",user)

  .then(res=>{alert(res.data.message)
                
  setLoginUser(res.data.user)
      
    history.push("/")
  
  });

}



  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>
      <input
        name="email"
        value={user.email}
        type="text"
        placeholder="Your Email"
        onChange={handlechange}
      ></input>
      <input
        name="password"
        value={user.password}
        type="password"
        placeholder="Your Password"
        onChange={handlechange}
      ></input>
      <div className="button" onClick={login}>Login</div>
      or
      <div className="button" onClick={()=>history.push('/register')}>Register</div>
    </div>
  );
};

export default Login;
