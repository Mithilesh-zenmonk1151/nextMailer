"use client"
import authSlice from "@/redux/auth/authSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
}
)
export default rootReducer

