import { authHeader } from 'redux/helpers/authHeader'

export const userService = {
    login,
    logout,
    register,
}

const baseUrl = 'cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev'

function register(user: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    }

    return fetch(`${baseUrl}/users/register`, requestOptions).then(
        handleResponse
    )
}

function login(email: string, password: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    }

    return fetch(`${baseUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then((user) => {
            localStorage.setItem('user', JSON.stringify(user))
            return user
        })
}

function logout() {
    localStorage.removeItem('user')
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}
