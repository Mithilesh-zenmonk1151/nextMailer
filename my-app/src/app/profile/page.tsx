"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getTests } from "@/redux/test/testAction";

export default function ProfilePage() {
  const [data,setData]= React.useState("nothing")
  const router=useRouter();
  const userId= useAppSelector((state)=>state.auth?.content?.loginData?.user?.uuid)
  console.log("Statesssssss",userId);
  const dispatch=useAppDispatch();
  useEffect(()=>{
   

  },[dispatch])
  
  const logOut=async()=>{
    try{
      await axios.get("/api/user/logout");
      toast.success("Logout successful");
      router.push("/login")

    }
    catch(error:any){
      console.log(error.message);
      toast.error(error.message)

    }

  }
  const getUserDetails=async()=>{
   try{
    const res= await axios.get("/api/user/me")
    console.log("yahi res.data hai",res.data);
    setData(res.data.data._id);
    toast.success("user details get successful")
   }
   catch(error:any){
    toast.error(error.message)
   }

  }
  return (
    <div>
      <h1>Profile</h1>
      <hr/>
      <p>Profile page</p>
      <h2>{data==="nothing"?"Nothing Here": <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr/>
      <button className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logOut}>Logout</button>
      <button className="bg-green-900 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={getUserDetails}>Getuser details</button>
        <h2>{userId}</h2>
    </div>
  )
}
