import { createAsyncThunk } from "@reduxjs/toolkit";
import type { FieldValues } from "react-hook-form";
import addQuestionService from "@/services/questionservices/addquestion";
import fetchQuestion from "@/services/questionservices/getQuestion";
import { createResponseType, getResponseType } from "./responseType";
import addResponseService from "@/services/response/addresponse";

export const createResponse = createAsyncThunk(
 createResponseType,
  async (data:{userId:string, testQuestionId:string,studentAnswer:string,testId:string}, { rejectWithValue }) => {
    try {
      console.log("Slice ===== Question",data);
      console.log("userhisdqdui IDDD======",data);
      const response = await addResponseService(data);
      const data = response?.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

// export const getResponse = createAsyncThunk(
//   getResponseType,
//   async (data:{testId:string, questionId:string}, { rejectWithValue }) => {

//     try {


//       const response = await fetchQuestion(data);
//       console.log("Question get TESTID===",data)

//       return {response,data};
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err);
//     }
//   }
// );
