"use client"
import authSlice from "@/redux/auth/authSlice"
import questionSlice from "@/redux/question/questionSlice"
import testSlice from "@/redux/test/testSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
    test:testSlice,
    question:questionSlice,
}
)
export default rootReducer

