import { createSlice } from '@reduxjs/toolkit'
import { createResponse} from './responseAction';

export type questions = {
    uuid: string,
    userId: string,
    testId: string,
    response: string;
    questionMarks: number;
    correct: boolean;
    testQuestionId: string;
}

type initialStateProps = {
    isLoading: boolean;
    content: {
        userId: string;
        uuid: string;
        testId: string,
        response: string;
        questionMarks: number;
        correct: boolean;
        testQuestionId: string;

    }[]
    error: Object | null;
};

const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    content: [{
        userId: "",
        uuid: "",
        questionMarks: 0,
        correct: false,
        testId: "",
        testQuestionId: "",
        response: ""
    }],
};

export const responseSlice = createSlice({
    name: 'questions',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(getResponse.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(getQuestion.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.content = action.payload
        //     // console.log("question action Payload",action.payload);
        // })
        // builder.addCase(getQuestion.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error
        //     state.content = []
        // })
        builder.addCase(createResponse.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createResponse.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = [...state.content, action.payload]
            // console.log("State......Content",state.content);
        })
        builder.addCase(createResponse.rejected, (state, action) => {
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

export default responseSlice.reducer