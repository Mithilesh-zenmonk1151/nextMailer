"use client";
import UserTestCard from '@/components/userTestCard/UserTestCard';
import { getTests } from '@/redux/test/testAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Box } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function UserPage() {
    const dispatch=useAppDispatch();
    const router= useRouter();


    useEffect(() => {
        dispatch(getTests());
      }, [dispatch]);
      const test = useAppSelector((state) => state.test?.content?.tests);

  console.log("testsfdhtyjyu", test);
    console.log("test========",test)
    const handleOnTestClick=(testId:string):void=>{
        console.log(testId);
        // router.push("/add-question")
        console.log("BUTTOONNsdfgd")
        router.push(`/starttest?testId=${testId}`);
    
        // setTestsId(testId);
    
      }
  return (
   <Box>
     <h1>Tests page</h1>
      {test?.map(
        (tests: {
          uuid: string;
          id:string;
          name: string;
          totalNumberOfQuestions: number;
          duration: number;
          totalMarks: number;
          instructions: string;
        }) => (
          <Box key={tests.id}>
            <UserTestCard
              name={tests.name}
              totalNumberOfQuestions={tests.totalNumberOfQuestions}
              duration={tests.duration}
              totalMarks={tests.totalMarks}
              instructions={tests.instructions}
              handleStartTestClick={()=>handleOnTestClick(tests?.uuid)}
            />
          </Box>
        )
      )}
   

   </Box>
  )
}
