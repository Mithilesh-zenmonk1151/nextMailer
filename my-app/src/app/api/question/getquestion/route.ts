import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  console.log("helloii");
  const {testId}= await request;
console.log("DAAAAATTAAAAAAA========",testId);
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/question`,{data:{testId}});
    console.log("getting Question", testId);
    if (!res) {
      alert("klofereg");
      console.log("ERRROOR OOCCUR WHILE geting thae question");
      return;
    }
    return NextResponse.json(res.data);
  } catch (error: any) {
    console.log(error);
    console.log("error occurred during getting QUESTION");
  }
}











