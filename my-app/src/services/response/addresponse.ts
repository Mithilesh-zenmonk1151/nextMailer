
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const addResponseService = async (data: FieldValues) => {
    console.log("rEEESSSS=========================")

    const response = await axios.post("api/response/addresponse", data)
    return response
}
export default addResponseService;