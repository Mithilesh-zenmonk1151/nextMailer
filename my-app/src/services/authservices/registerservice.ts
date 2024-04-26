
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const registerService = async (inputs: FieldValues) => {
    const response = await axios.post("api/user/registration", inputs)
    console.log(response)
    return response
}
export default registerService