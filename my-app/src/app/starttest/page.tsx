"use client";
import { Box, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import styles from "@/app/ui/home.module.css"
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import { getQuestion } from "@/redux/question/questionAction";
export default function StartTest() {
  const searchParams = useSearchParams();
  const dispatch=useAppDispatch();

  const testId = searchParams.get("testId");
  useEffect(()=>{
    dispatch(getQuestion(testId))

  },[dispatch])
  console.log("testId",testId);
  return (
    <Box className={styles.teststart}>
      <Typography
        sx={{
          bgcolor: "white",
          color: "white",
          fontFamily: "Poppin",
          fontSize: "20px",
        }}
        className={styles.start}
      >
        {testId}
      </Typography>
    </Box>
  );
}
