import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTestsType, getTestsType } from "./testType";
import type { FieldValues } from "react-hook-form";
import createTestService from "@/services/test/createtestservice";
import getTestsService from "@/services/test/gettestservice";
import fetchTests from "@/services/test/gettestservice";
// import loginService from "@/service/Auth/register.service";

export const createTests = createAsyncThunk(
 createTestsType,
  async (test:{name:string, totalNumberOfQuestions:number,totalMarks:number,instructions:string, duration:number,userId: string}, { rejectWithValue }) => {
    try {
      console.log("Slice wala teststssss",test);
      const response = await createTestService(test);
      const data = response?.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const getTests = createAsyncThunk(
  getTestsType,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchTests();
      return response;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
