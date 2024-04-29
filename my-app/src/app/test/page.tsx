import { getTests } from '@/redux/test/testAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'

const TestPage = () => {
//     const dispatch=useAppDispatch();
//     // const userId= useAppSelector((state)=>state)
//     // console.log("useRId",userId);
//     const userId= useAppSelector((state)=>state.auth?.content?.loginData?.user?.uuid)
//   console.log("Statesssssss",userId);
    
    
  return (
    <Box>
        <h1>Tests page</h1>

    </Box>
  )
}

export default TestPage
