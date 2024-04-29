
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const createTestService = async (inputs: FieldValues) => {
    const response = await axios.post("api/test/addtest", inputs)
    console.log(response)
    return response
}
export default createTestService;