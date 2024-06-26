import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const respo = await request.json();
    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
      respo
    );
    
    const loginData=res?.data?.user
    
const token= res?.data?.user?.token;

    if (!res) {
      alert("submitting form failed");
      return;
    }
    const response= NextResponse.json({
        message:"Login Successfull",
        success:true,
        loginData

    })
   
    response.cookies.set("token", token, { httpOnly: true, path: "/" });
 return response;
  } catch (err: any) {
    console.log(err);
  }
}
