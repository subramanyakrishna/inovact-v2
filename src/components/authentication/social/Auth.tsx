import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const Auth = () => {
    const history = useHistory()
    useEffect(() => {
        const query = window.location.href.split('#')[1]
        // localStorage.setItem('user', id_token)
        let id_token = query.split('&')[0]
        id_token = id_token.split('=')[1]
        localStorage.setItem('user', id_token)
        history.push('/app')
    }, [])
    return <div>redirecting....</div>
}

export default Auth
