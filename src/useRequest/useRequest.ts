import axios from "axios";
import { useState } from "react";


const useRequests = ({route, method, body, id, onSuccess} : any) =>{
    const [errors, setErrors] = useState(null);
    const baseUrl = "https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/";
    const doRequest = async (props = {})=>{
        try {
            setErrors(null);
            console.log("The user id is: "+id);
            const response = await axios({
                method: method,
                url: `${baseUrl}${route}`,
                data: body?body:null,
                params: {
                    id: id ? id : null,
                },
                headers: {
                    "Authorization": localStorage.getItem("user"),
                }
            });
            console.log(response.data);
            if(onSuccess){
                onSuccess(response.data);
            }
            return response.data;
        }catch(err: any){
            console.log(err.message);
            setErrors(err.message);
        }
    }
    return {doRequest, errors};
}


export default useRequests;