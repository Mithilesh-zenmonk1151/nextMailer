import axios from "axios"
 const fetchBook = async (testId: string|string[]) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/question/${testId}`)
        const resp = await response.json()
        return resp
    }
export default fetchBook