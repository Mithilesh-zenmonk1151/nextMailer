
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const loginService = async (inputs: FieldValues) => {
    const response = await axios.get("api/user/loggin", inputs)
    console.log(response)
    return response
}
export default loginService