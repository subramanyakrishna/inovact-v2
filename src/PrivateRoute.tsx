// import Application from 'components/application/Application';
// import Signin from 'components/authentication/signin/Signin';
// import Signup from 'components/authentication/signup/Signup';
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { Route, Redirect } from 'react-router-dom'
// // function PrivateRoute({component, isAuthenticated , ...options}: any) {
// //     const userAuthenticated = useSelector((state: any)=>state.authentication.userAuthenticated);
// //     const finalComponent = userAuthenticated? component: <Signin/>;
// //     return (
// //             <Route {...options} component={finalComponent}/>
// //     )
// // }
// const PrivateRoute = ({ component: Component, auth, ...rest }: any) => {
//     console.log(auth);
//     return (
//     <Route
//         {...rest}
//         render={props =>
//             auth === true ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to="/login" />
//             )
//         }
//     />
// )};

// export default PrivateRoute;

// // import Application from 'components/application/Application'
// // import React from 'react'
// // import { Route, Redirect } from 'react-router-dom'

// // const PrivateRoute: React.FC<any> = ({ isAuthenticated, ...rest }) => {
// //     return (
// //         // Show the component only when the user is logged in
// //         // Otherwise, redirect the user to /signin page
// //         <Route
// //             {...rest}
// //             render={() =>
// //                 isAuthenticated ? <Application /> : <Redirect to="/login" />
// //             }
    
// // <PrivateRoute
// //                         isAuthenticated={state.authentication.userAuthenticated}
// //                         path="/feed"
// //                         exact
// //                     />

import Application from 'components/application/Application'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute: React.FC<any> = ({
    component: Component,
    ...rest
}) => (
    <Route {...rest} render={()=>{return localStorage.getItem("user")?<Component/>:<Redirect to="/login"/>}}/>
);

export default PrivateRoute;