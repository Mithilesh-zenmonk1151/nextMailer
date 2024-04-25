"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";


export default function LoginPage() {
  const router= useRouter();
  const [buttonDisabled,setButtonDisabled]=React.useState(false);

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {
    try {
      const response= await axios.post("/api/user/login",user);
      toast.success("User loggedin successfully");
      console.log(response);
      router.push("/profile");
    } catch (error:any) {
      console.log(error);
      console.log("Login failed", error.message);
      toast.error(error.message)
    }
  };

  useEffect(()=>{
    if (
      user.email.length > 0 &&
      user.password.length > 0 
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  },[user])
  console.log("email", user.email);
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-start">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="enter your email "
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        value={user.email}
        className="text-black color-black"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="......"
        name="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        value={user.password}
        className="text-black"
      />
      <button onClick={onLogin}>Login</button>
      <Link href="/forgotpassword" className="text-blue-500">Forgot password</Link>
       
    </div>
  );
}
