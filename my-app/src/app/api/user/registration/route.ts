import axios from "axios";
import { NextResponse,NextRequest } from "next/server";
export async function POST(request:NextRequest){
    try{
        const a = await request.json()
        console.log(a)
        const res  = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/signup`, a)
        console.log(res)
        
        if(!res) {
                alert("submitting form failed")
                return
            }
            
            return NextResponse.json(res.data)

    }
    catch(error:any){
        console.log(error);
    }
}