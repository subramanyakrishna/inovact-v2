import React from 'react'
interface AppProps {
   
    teamname:string
    avatar:string
}
const UserTeams =({teamname,avatar}:AppProps)=>{
    return(
            <div className="user-team__tab">
                <div className="user-team__tab__tabInfo">
                        <img src={avatar} alt=""/>
                        <h5 className="text-style--bold text-align--left text-size--big">{teamname}</h5>
                </div>
            </div>
)
}
export default UserTeams;