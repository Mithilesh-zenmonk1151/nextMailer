import { createAsyncThunk } from "@reduxjs/toolkit";
import { createQuestionType, getQuestionType } from "./questionType";
import type { FieldValues } from "react-hook-form";
import addQuestionService from "@/services/questionservices/addquestion";
import fetchQuestion from "@/services/questionservices/getQuestion";

export const createQuestion = createAsyncThunk(
 createQuestionType,
  async (question:{title:string, correctOption:string,option1:string,option2:string, option3:string,option4: string,weightage:number,testId:string}, { rejectWithValue }) => {
    try {
      console.log("Slice ===== Question",question);
      const response = await addQuestionService(question);
      const data = response?.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const getQuestion = createAsyncThunk(
  getQuestionType,
  async (testId:string, { rejectWithValue }) => {

    try {


      const response = await fetchQuestion(testId);
      console.log("Question get TESTID===",testId)

      return {response,testId};
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
