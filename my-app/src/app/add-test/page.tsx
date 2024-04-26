"use client"
import Buttons from "@/components/button/Buttons";
import InputFieldCompo from "@/components/inputField/InputField";
import React, { useState } from "react";

export default function page() {
  const [email, setEmail]= useState("");
  return (
    <div>
      <InputFieldCompo/>
        <Buttons text="add Test"/>
      
    </div>
  )
}
