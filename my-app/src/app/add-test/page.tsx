"use client"
import Buttons from "@/components/button/Buttons";
import InputFieldCompo from "@/components/inputField/InputField";
import React, { useState } from "react";

export default function AddTest() {
  const [email, setEmail]= useState("");
  console.log("emaillll",email);


  return (
    <div>
      <InputFieldCompo value={email} setValue={setEmail} placeholder="enter your email here"/>
        <Buttons text="add Test"/>
      
    </div>
  )
}
