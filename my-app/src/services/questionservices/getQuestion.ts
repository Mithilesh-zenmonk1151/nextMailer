import axios from "axios";
import type { FieldValues } from "react-hook-form";
const fetchQuestion = async (testId: FieldValues) => {
    try {
        console.log("IIINNNPPUUUTT=====",testId);
        const response = await axios.get(`api/question/getquestion`,  testId );
        console.log("console responser.data=======service==",response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching tests:", error);
        return null;
    }
};
export default fetchQuestion;