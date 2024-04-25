"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast ,{Toaster} from "react-hot-toast";
import axios  from "axios";
export default function SignupPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  console.log("email",user.username);
  console.log("email",user.email);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const onSignup = async () => {
    try {
    const response= await axios.post("/api/user/signup",user);
    console.log("Signup Success", response.data);
    toast.success("User Signup Successfully")
    router.push("/login")
    } catch (error:any) {
      console.log(error);
      toast.error(error.message);
      console.log("Signup failed");
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col content-center i">
      <h1>Signup</h1>
      <label htmlFor="username">username</label>
      <input
        type="text"
        value={user.username}
        placeholder="username..."
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        name="username"
        id="username"
        className="text-black"
      />
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
      <button onClick={onSignup}>
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      
      <Link href="/signup">Visit signup page</Link>
    </div>
  );
}
