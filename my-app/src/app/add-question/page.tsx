"use client"
import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
 
import { useSearchParams } from 'next/navigation'
import { useAppDispatch } from '@/store/hooks'
import { createQuestion } from '@/redux/question/questionAction'
import toast from 'react-hot-toast'
export default function AddQuestion({}) {

    //   const { testId } = router.query;
    const searchParams = useSearchParams()
    
    const testId = searchParams.get('testId')
    const dispatch= useAppDispatch();

    const [question,setQuestion]=useState({
        title:"",
        correctOption:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        weightage:0,
        testId:testId,
    })
    const handleOnQuistionClick=async()=>{
        try{
            dispatch(createQuestion(question));
            console.log(question);
            toast.success("Question added successfully")

        }
        catch(error){

        }


    }
  return (
   <Box sx={{
    width:"100%",
    heigth:"100%",
    bgcolor:"white",
    display:"flex",
    justifyContent:"center",
    flexDirection:"column",
    gap:"30px",
    color:"black"
   }}>
    
   <label htmlFor="name" >name</label>
      <TextField  placeholder="enter your name" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.title} name="name"onChange={(e) => setQuestion({ ...question, title: e.target.value }) }/>
       <label htmlFor="CRTOP" >Correct option</label>
      <TextField  placeholder="enter correct option" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.correctOption} name="CRTOP"onChange={(e) => setQuestion({ ...question, correctOption: e.target.value }) }/>
       <label htmlFor="op1" >option1</label>
      <TextField  placeholder="enter option s" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.option1} name="name"onChange={(e) => setQuestion({ ...question, option1: e.target.value }) }/>
       <label htmlFor="op2" >option2</label>
      <TextField  placeholder="enter option 2" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.option2} name="op2"onChange={(e) => setQuestion({ ...question, option2: e.target.value }) }/>
       <label htmlFor="op3" >option3</label>
      <TextField  placeholder="enter option 3" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.option3} name="name"onChange={(e) => setQuestion({ ...question, option3: e.target.value }) }/>

<label htmlFor="op4" >option4</label>
      <TextField  placeholder="enter option 4" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.option4} name="name"onChange={(e) => setQuestion({ ...question, option4: e.target.value }) }/>

<label htmlFor="wght" >Marks</label>
      <TextField  placeholder="enter your name" sx={{
        color:"white",
        bgcolor:"white",
      }}  value={question.weightage} type='number' name="wght"onChange={(e) => setQuestion({ ...question, weightage: e.target.value }) }/>



      <Button onClick={handleOnQuistionClick}>Add Question</Button>







    
    <h1>{testId}</h1>
    
   </Box>
  )
}
