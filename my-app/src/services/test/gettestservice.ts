
import axios from "axios";
import type {FieldValues} from "react-hook-form";

const fetchTests = async (inputs: FieldValues) => {
    console.log("IIINNNPPUUUTT",inputs);
    const response = await fetch("api/test/gettest", inputs)
    console.log(response)
    return response
}
export default fetchTests