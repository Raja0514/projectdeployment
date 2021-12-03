import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";
const Register = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterpassword } = user;

    if (name && email && password && password === reEnterpassword) {
      //axios.post("http://localhost:3002/register",user)

      //axios.post("https://raksha05145.herokuapp.com/register",user)

      axios.post("https://raksha05145.herokuapp.com/register", user)

        .then((res) => {
          alert(res.data.message);

          history.push("/login");
        });
    } else {
      alert("invalid user");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        name="name"
        value={user.name}
        type="text"
        placeholder="Your Name"
        onChange={handlechange}
      ></input>
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
      <input
        name="reEnterpassword"
        value={user.reEnterpassword}
        type="password"
        placeholder="Re-enter Password"
        onChange={handlechange}
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
    </div>
  );
};
export default Register;
