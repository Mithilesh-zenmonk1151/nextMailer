"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { loginUsers } from "@/redux/auth/authAction";
import style from "@/app/ui/home.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const dispatch = useAppDispatch();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      // const response= await axios.post("/api/user/loggin",user);
      console.log("Logiin Users Login page", user);
      dispatch(loginUsers(user));
      console.log(user);
      toast.success("User loggedin successfully");
      // console.log(response);
      router.push("/profile");
    } catch (error: any) {
      console.log(error);
      console.log("Login failed", error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  console.log("email", user.email);
  return (
    <div className={style.signup}>
      <div className={style.signupbody}>
        <h1 className={style.headingS}>Login</h1>
        <label htmlFor="email" className={style.labelS}>
          Email
        </label>
        <input
          type="email"
          placeholder="enter your email "
          name="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
          className={style.labelI}
        />
        <label htmlFor="password" className={style.labelS}>
          Password
        </label>
        <input
          type="password"
          placeholder="......"
          name="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
          className={style.labelI}
        />
        <button onClick={onLogin} className={style.btnS}>
          Login
        </button>
        <Link href="/forgotpassword" className={style.visitL}>
          Forgot password
        </Link>
        <Link href="/signup" className={style.visitL}>
          Visit signup page{" "}
        </Link>
      </div>
    </div>
  );
}
