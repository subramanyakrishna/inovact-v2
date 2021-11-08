import axios from 'axios'
import { useState } from 'react'

const useRequests = ({
    route,
    method,
    body,
    id,
    onSuccess,
    onFailure = null,
}: any) => {
    const [errors, setErrors] = useState(null)
    const baseUrl =
        'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/'
    const doRequest = async (props = {}) => {
        try {
            setErrors(null)

            const response = await axios({
                method: method,
                url: `${baseUrl}${route}`,
                data: body ? body : null,
                params: {
                    id: id ? id : null,
                },
                headers: {
                    Authorization: localStorage.getItem('user'),
                },
            })

            if (onSuccess) {
                onSuccess(response.data)
            }
            return response.data
        } catch (err: any) {
            if (onFailure) {
                onFailure()
            }

            setErrors(err.message)
        }
    }
    return { doRequest, errors }
}

export default useRequests
