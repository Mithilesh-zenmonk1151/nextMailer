import axios from "axios";
import { NextResponse,NextRequest } from "next/server";
export async function POST(request:NextRequest){
    try{
        console.log("helloii")
        const data= await request.json()
        console.log(data)
        const res  = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/test`, data)
        console.log(res)
        
        if(!res) {
                alert("adding test failed")
                return
            }
            
            return NextResponse.json(res.data)

    }
    catch(error:any){
        console.log(error);
    }
}