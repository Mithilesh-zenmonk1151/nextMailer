import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";



connect();
export async function POST(request:NextRequest){
    try{
        const reqBody= await request.json();
        // console.log("HELLOW THIS IS VERIFY EMAIL PAGE",reqBody);

        const {token}=reqBody;
        console.log("TOKKKKKKKKEN",token);
        const user=await User.findOne({verifyToken:token,
            verifyTokenExpiry:{$gt: Date.now()}
        })
        console.log("USERRRRR",user)
        if(!user){
            return NextResponse.json({error:"Invalid token"},{status:400});
        }
        console.log(user);
        user.isVerified=true;
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save();


           return NextResponse.json({
            message:"Email verified successfully",
            success:true
           })


    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:500})

    }
}