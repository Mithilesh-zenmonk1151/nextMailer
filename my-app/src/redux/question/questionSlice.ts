import { createSlice } from '@reduxjs/toolkit'
import { createQuestion, getQuestion } from './questionAction';

export type questions = {
    id: string,
    title:string,
    correctOption:string,
    option1:string;
    option2:string;
    option3:string;
    option4:string;
   weightage:number,
   testId?: string;




}

type initialStateProps = {
    isLoading: boolean;
    content: {
        title: string;
        correctOption: string;
        option1:string;
        option2:string;
        option3:string;
        option4:string;
        weightage: number; // Change type to string
        testId?: string;
    }[] 
    error: Object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    content: [{
        title: "",
        correctOption: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        weightage: 0, // Set default value to empty string for time duration
        testId: ""
    }],
  };

export const questionSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getQuestion.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getQuestion.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
            console.log("question action Payload",action.payload);
        })
        builder.addCase(getQuestion.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })
        builder.addCase(createQuestion.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createQuestion.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = [...state.content, action.payload]
            console.log("State......Content",state.content);
        })
        builder.addCase(createQuestion.rejected, (state, action) => {
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

export default questionSlice.reducer