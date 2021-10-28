import axios from 'axios'

const makeApiCall = async (method: any, route: string) => {
    console.log('method', method)
    console.log('route', route)

    const response = await axios({
        method: method,
        url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/${route}`,
        headers: {
            Authorization: localStorage.getItem('user'),
            'Content-Type': 'application/json',
        },
    })
    return response
}

export default makeApiCall
