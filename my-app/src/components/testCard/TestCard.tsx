import * as React from "react";
// import GetComment from "../comment/getComment/GetComment.jsx";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PublicIcon from "@mui/icons-material/Public";
import { useDispatch, useSelector } from "react-redux";

import Buttons from "../button/Buttons.jsx";
import { Button } from "@mui/material";
type testProps = {
  name?: string;
  duration?: number;
  instructions?: string;
  totalNumberOfQuestions?: number;
  totalMarks?: number;
  handleAddTestClick:(testId:string)=>void,
};

export default function TestCard(props: testProps) {
  const {
    name,
    duration,
    instructions,
    totalNumberOfQuestions,
    totalMarks,
    handleAddTestClick,
  } = props;

  return (
    <Stack
      margin={"auto"}
      sx={{
      
        displayDirection: "column",
        gap: "20px",
        bgColor: "red",
      }}
    >
      <Card
        sx={{
          width: "300px",
          boxShadow: "none",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          height:"400px",
        }}
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={"5px"}
          sx={{
            height: "300px",
            width: "300px",
            bgcolor: " #F8F8FF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography fontSize={"14px"} color={"Black"} >
            {" "}
            {name}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Duration{duration}
          </Typography>

          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Instructions{instructions}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Total Q:-{totalNumberOfQuestions}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Total Marks{totalMarks}
          </Typography>
          <Button>Edit </Button>
          <Button>Delete </Button>
          <Button onClick={()=>handleAddTestClick("testId")}> Add questions</Button>
        </Stack>
      </Card>
    </Stack>
  );
}
// commentData={comment}
