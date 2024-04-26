import { connect } from "@/dbConfig/dbConfig";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
const bcryptjs= require("bcryptjs");


connect();
export async function POST(request:NextRequest){
    const reqBody= await request.json();
    const {token,password,email}=reqBody;
    const user= await User.findOne({email});
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
}