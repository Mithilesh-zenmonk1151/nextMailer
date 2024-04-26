import { createAsyncThunk } from '@reduxjs/toolkit'
import { createTestsType, getTestsType } from './authType'
import type {FieldValues} from "react-hook-form";
import loginService from '@/service/Auth/register.service';




export const createTests = createAsyncThunk(signupType, async (inputs: FieldValues, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await createte(inputs)
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
        // console.log(response)
        const data = await response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})