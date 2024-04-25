import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import type {FieldValues} from "react-hook-form";
import loginService from '@/services/authservices/loginservice';
import registerService from '@/services/authservices/registerservice';





export const registerUsers = createAsyncThunk(signupType, async (inputs: FieldValues, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await registerService(inputs)
        const data = response?.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})
export const loginUsers = createAsyncThunk(loginType, async (inputs: FieldValues, {rejectWithValue}) => {
    try{
        console.log(inputs)
        const response = await loginService(inputs)
        const data = await response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})