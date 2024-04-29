"use client"
import { createTests } from "@/redux/test/testAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Label } from "@mui/icons-material";
import { Button, TextField, duration } from "@mui/material";
import { useRouter } from "next/router";
// import Buttons from "@/components/button/Buttons";
// import InputFieldCompo from "@/components/inputField/InputField";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddTest() {
  // const [name, setName]= useState("");
  // const [totalNumberOfQuestions,setTotalNumberOfQuestions]=useState("");
  // const[totalMarks,setTotalMarks]=useState("");
  // const[instructions,setInstructions]=useState("");
  //  const[duration,setDuration]=useState("");
  // const router=useRouter();
  const dispatch= useAppDispatch();
  const userId= useAppSelector((state)=>state.auth?.content?.loginData?.user?.uuid)
  console.log("Statesssssss",userId)
   const [test,setTest]=useState({
    name:"",
    totalNumberOfQuestions:0,
    totalMarks:0,
    instructions:"",
    duration:0,
    userId:userId

   })
   const handleOnClickTest=async()=>{
    try{
      console.log("TESTS",test);
      dispatch(createTests(test));
      toast.success("Test added successfuly");
      

    }
    catch(error:any){
      console.log(error);
      toast.error(error.message);

    }
   }



  return (
    <div className="flex flex-col"> <label htmlFor="name" >name</label>
      <TextField  placeholder="enter your name" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={test.name} name="name"onChange={(e) => setTest({ ...test, name: e.target.value }) }/>
      <label htmlFor="ttMark">Total Number Of Question</label>
      <TextField  placeholder="Tota number of question" sx={{
        color:"white",
        bgcolor:"white",
      }} value={test.totalNumberOfQuestions} name="ttMark" onChange={(e) => setTest({ ...test, totalNumberOfQuestions: e.target.value }) } />
      <label htmlFor="totalMarks">Total Marks</label>
      <TextField  placeholder="Total Number Of Marks" sx={{
        color:"white",
        bgcolor:"white",
      }} value={test.totalMarks} name="totalMarks" onChange={(e) => setTest({ ...test, totalMarks: e.target.value }) }/>
      <label htmlFor="instruction">Instructions</label>
      <TextField type="text" placeholder="enter your name" sx={{
        color:"white",
        bgcolor:"white",
      }} value={test.instructions} name="instruction" onChange={(e) => setTest({ ...test, instructions: e.target.value }) } />
      <label htmlFor="duration">Duration</label>
      <TextField  placeholder="Duration" sx={{
        color:"white",
        bgcolor:"white",
      }} value={test.duration} name="duration" onChange={(e) => setTest({ ...test, duration: e.target.value }) }/>
      <Button sx={{
        bgcolor:"white",
        height:"40px",
        width:"fit-content"
      }} onClick={handleOnClickTest}>Add Test</Button>

      
      
    </div>
  )
}
