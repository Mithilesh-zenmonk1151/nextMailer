import { createSlice } from '@reduxjs/toolkit'
import { createTests, getTests } from './testAction';

export type tests = {
    id: string,
   name:string,
   totalNumberOfQuestions:number,
   totalMarks:number,
   instructions:string,
   duration:number,
   userId: string;




}

type initialStateProps = {
    isLoading: boolean;
    content: {
        name: string;
        totalNumberOfQuestions: number;
        totalMarks: number;
        instructions: string;
        duration: number; // Change type to string
        userId: string;
    }[] 
    error: Object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    content: [{
        name: "",
        totalNumberOfQuestions: 0,
        totalMarks: 0,
        instructions: "",
        duration: 0, // Set default value to empty string for time duration
        userId: ""
    }],
  };

export const testSlice = createSlice({
    name: 'tests',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTests.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getTests.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
            console.log("Test action Payload",action.payload);
        })
        builder.addCase(getTests.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })
        builder.addCase(createTests.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createTests.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = [...state.content, action.payload]
        })
        builder.addCase(createTests.rejected, (state, action) => {
            state.isLoading = false
            state.content = []
            state.error = action.error
        })

        // builder.addCase(updateQuestion.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(updateQuestion.fulfilled, (state, action) => {
        //     state.isLoading = false

        //     state.content = state.content.map((question) => {

        // })
        // builder.addCase(updateQuestion.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error
        // })

    }
})

export default testSlice.reducer