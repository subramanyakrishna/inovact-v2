import axios from "axios";
import { useState } from "react";


const useRequests = ({url, method, body, onSuccess} : any) =>{
    const [errors, setErrors] = useState(null);
    const doRequest = async (props = {})=>{
        try {
            setErrors(null);
            // const response = await axios[`&{method}`](url, {...body, ...props});
            const response = await axios({
                method: method,
                url: url,
                data: body
            });
            console.log(response);
            if(onSuccess){
                onSuccess(response.data);
            }
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
    return {doRequest, errors};
}


export default useRequests;