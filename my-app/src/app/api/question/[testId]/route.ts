import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest,  { params }: { params: { testId: string }}) {
  console.log("Geeteteett==============================")
  try {
    console.log(params.testId)
    const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/question/${params.testId}`,
      // {
      //   cache: 'no-cache'
      // }
    );
    const response = await res.data;
    if (!response) {
      return 404;
    }
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
  }
}











