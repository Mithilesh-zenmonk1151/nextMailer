"use client"
import authSlice from "@/redux/auth/authSlice"
import testSlice from "@/redux/test/testSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
    test:testSlice,
}
)
export default rootReducer

