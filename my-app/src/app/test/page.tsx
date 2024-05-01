"use client";
import TestCard from "@/components/testCard/TestCard";
import { getTests } from "@/redux/test/testAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [testsId, setTestsId] = useState("");

  const userId = useAppSelector(
    (state) => state.auth?.content?.loginData?.user?.uuid
  );
  console.log("Statesssssss", userId);
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
  const test = useAppSelector((state) => state.test?.content?.tests);

  console.log("testsfdhtyjyu", test);
  const handleOnTestClick = (testId: string): void => {
    console.log(testId);
    // router.push("/add-question")
    console.log("BUTTOONNsdfgd");
    router.push(`/add-question?testId=${testId}`);

    setTestsId(testId);
  };
  console.log("Original Test Id", testsId);
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "100%",
        height: "100vh",
        color: "black",
        display: "flex",
      }}
    >
      <h1>Tests page</h1>
      {test?.map(
        (tests: {
          uuid: string;
          id: string;
          name: string;
          totalNumberOfQuestions: number;
          duration: number;
          totalMarks: number;
          instructions: string;
        }) => (
          <Box key={tests.id}>
            <TestCard
              name={tests.name}
              totalNumberOfQuestions={tests.totalNumberOfQuestions}
              duration={tests.duration}
              totalMarks={tests.totalMarks}
              instructions={tests.instructions}
              handleAddTestClick={() => handleOnTestClick(tests?.uuid)}
            />
          </Box>
        )
      )}
    </Box>
  );
};

export default TestPage;
