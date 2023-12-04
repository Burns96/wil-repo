import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={Login}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      <div className="w-100 text-center mt-2">
        Don't have an account?
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default Login;