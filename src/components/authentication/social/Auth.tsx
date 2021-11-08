import React, { useEffect } from 'react'

const Auth = () => {
    useEffect(() => {
        console.log('Auth')
        console.log(window.location.href)
        const query = window.location.href.split('#')[1]
        // localStorage.setItem('user', id_token)
        console.log(query)
    }, [])
    return <div>redirecting....</div>
}

export default Auth
