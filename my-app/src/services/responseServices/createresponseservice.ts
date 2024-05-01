import axios from "axios";
import type { FieldValues } from "react-hook-form";
const createResponseService = async (inputs: FieldValues) => {
  const response = await axios.post("api/reponse/addresponse", inputs);
  console.log(response);
  return response;
};
export default createResponseService;
