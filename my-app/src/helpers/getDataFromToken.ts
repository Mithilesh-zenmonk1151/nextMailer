import { request } from "http";
import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");
export const getDataFromToken=(request:NextRequest)=>{
    try{
        const token= request.cookies.get("token")?.value || '';
       const decodedToken:any= jwt.verify(token, process.env.TOKEN_SECRET!);
       return decodedToken.id;

    }
    catch(error:any){
        throw new Error(error.message)
    }
}

