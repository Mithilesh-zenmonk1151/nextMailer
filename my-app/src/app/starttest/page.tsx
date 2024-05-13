"use client";
import { Box, Button, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import styles from "@/app/ui/home.module.css"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { getQuestion } from "@/redux/question/questionAction";
import QuestionComponent from "@/components/questionComponentt/QuestionComponent";
import { CleaningServices } from "@mui/icons-material";
export default function StartTest() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [quesId,setQuesId]=useState("");

  const testId = searchParams.get("testId");
  useEffect(() => {
    dispatch(getQuestion(testId))
  }, [dispatch])
  // console.log("testId", testId);
  const question = useAppSelector((state) => state.question?.content?.response?.response);
  console.log("QUESTION=====", question);
  const handleOnClickQuest = (questionId: string): void => {
    // console.log(testId);
    console.log("QuetionIIIIDDDD======", questionId);
    // // router.push("/add-question")
    // console.log("BUTTOONNsdfgd");
    // router.push(`/add-question?testId=${testId}`);

    // setTestsId(testId);
    
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
    console.log("SEEEELLLLEEECCCTTTEEEDDD VVV", selectedValue)
  };
  
  return (
    <Box className={styles.teststart} sx={{
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      bgcolor: "white"
    }}>
      <Box>
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
        {question?.map(
          (response: {
            uuid: string;
            id: string;
            title: string;
            weightage: string;
            duration: number;
            totalMarks: number;
            instructions: string;
            option1: string,
            option2: string,
            option3: string,
            option4: string,
          }) => (
            <Box key={response.uuid}>
              <QuestionComponent name={response.title} selectedValue={selectedValue} marks={response.weightage} option1={response.option1} option2={response.option2} option3={response.option3} option4={response.option4} label1={response.option1} label2={response.option2} label3={response.option3} label4={response.option4}
                handleOnClickQuest={() => handleOnClickQuest(response?.uuid)}
                onChange={handleOnChange}
              />
            </Box>
          )
        )}

      </Box>
      <Box sx={{
        display: "flex",
        width: "100",
        justifyContent: "center"
      }}>
        <Button sx={{
          bgcolor: "#007FFF",
          color: "white",
          fontFamily: "Inter",
          fontWeight: "700",
          fontSize: "18px",
          borderRadius: "10px"
        }}>Submit Test</Button>

      </Box>
    </Box>
  );
}
