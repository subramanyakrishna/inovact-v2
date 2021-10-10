import axios from "axios";
import { useState } from "react";


const useRequests = ({route, method, body, onSuccess} : any) =>{
    const [errors, setErrors] = useState(null);
    const baseUrl = "https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/";
    const doRequest = async (props = {})=>{
        try {
            setErrors(null);
            const response = await axios({
                method: method,
                url: `${baseUrl}${route}`,
                data: body,
                headers: {
                    "Authorization": localStorage.getItem("user"),
                }
            });
            console.log(...response.data);
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