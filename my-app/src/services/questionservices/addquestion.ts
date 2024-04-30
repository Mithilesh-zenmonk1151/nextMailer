
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const addQuestionService = async (inputs: FieldValues) => {
    console.log("rEEESSSS=========================")

    const response = await axios.post("api/question/addquestion", inputs)
    return response
}
export default addQuestionService;