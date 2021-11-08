import React from 'react'

const Auth = () => {
    const query = new URLSearchParams(window.location.search)
    const id_token = query.get('id_token')
    console.log(id_token)
    return <div>hello</div>
}

export default Auth
