 import Application from 'components/application/Application';
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute: React.FC<any> = ({
    isAuth: auth,
    component: Component,
    ...rest
}) => {
    return (
    <Route {...rest} render={()=>{return localStorage.getItem("user")?<Component/>:<Redirect to="/login"/>}}/>
)};

export default PrivateRoute;