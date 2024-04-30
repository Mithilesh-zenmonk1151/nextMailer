import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import type {FieldValues} from "react-hook-form";
import loginService from '@/services/authservices/loginservice';
import registerService from '@/services/authservices/registerservice';





export const registerUsers = createAsyncThunk(signupType, async(user: {name: string, email: string, password: string, role: string}, {rejectWithValue}) => {
    try {
        console.log("Slice wala user During signup",user);
        console.log("Hello world")
      
        const response = await registerService({email:user.email,password:user.password, name:user.name,role:user.role})
        const data = response?.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
        
    }
})
export const loginUsers = createAsyncThunk(loginType, async (user:{email:string,password:string}, {rejectWithValue}) => {
    try{
        console.log("SSSLICCCEEEE UUSSERRS",user)
        const response = await loginService({email:user.email,password:user.password})
        const data = await response.data
        // console.log(data)
        const token=data?.loginData?.token
        localStorage.setItem("logged", "true");
        localStorage.setItem("token", token);
    
        console.log("data Loggin wala data tTTTToken ke liye",token)
      
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})