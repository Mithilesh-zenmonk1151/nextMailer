import { createAsyncThunk } from "@reduxjs/toolkit";
import { createQuestionType, getQuestionType } from "./questionType";
import type { FieldValues } from "react-hook-form";
import addQuestionService from "@/services/questionservices/addquestion";

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

// export const getTests = createAsyncThunk(
//   getTestsType,
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetchTests();
//       return response;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err);
//     }
//   }
// );
