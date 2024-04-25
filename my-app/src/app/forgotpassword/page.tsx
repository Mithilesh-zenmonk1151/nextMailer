"use client"
import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isOpen, setisOpen]=useState(false);
  const forgotPswHandle = () => {
    console.log("forgot password");
  };
  return (
    <div className="flex  flex-col justify-center items-center content-center align-center h-[100vh]  w-[100%]">
      <h1>Forgot Password</h1>
      <label htmlFor="email">Email</label>

      <input
        type="email"
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="emal"
         className="w-fit"
      />
      <button className="max-w-0 border-s-black bg-blue-700 text" onClick={forgotPswHandle}>Submit</button>

    </div>
  );
}
