import React from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';

const RequestsTab =(props:any)=>{
    const allTeams = useSelector((state: any) => state.teams.teams)

    const handleAcceptTeamMember  = async (e:any) =>{
        const currentTeam= allTeams.filter((ele:any)=>ele.id === props.team_id )[0]
        const teamId = currentTeam.id;
        const response =  await axios( {
            method:'post',
            url:"https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/request/accept",
            data: e ? {request_id:e}: null,
            headers: {
                "Authorization": localStorage.getItem("user"),
            }
        })
    }

    const handleRejectTeamMember  = async (e:any) =>{
        const currentTeam= allTeams.filter((ele:any)=>ele.id === props.team_id )[0]
        const teamId = currentTeam.id;
        const userId = e;
        const response =  await axios( {
            method:'post',
            url:"https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/request/reject",
            data: e ? {request_id:e}: null,
            headers: {
                "Authorization": localStorage.getItem("user"),
            }
        })
    }

    return(
        <>
         { props.requests.length == 0 ? <div className="text-align--center">No Requests yet </div>: null }
        {
           props.requests.map((request:any,index:number)=>{
                return(
                    <div className="requests-info">
                     <div className="requests-info__details">
                        <img src={request.user.avatar} alt="name"/>
                        <div className="requests-info__details__text">
                        <h5 className="text-style--bold text-align--left text-size--big">{request.user.first_name}</h5>
                            <p className="text-style--light text-align--left text-size--small">{request.user.role}</p>
                        </div>
                    </div>
                               
                    <div className="requests-info__details__buttons">
                         <button className="requests-info__details__buttons--accept" onClick={handleAcceptTeamMember.bind(request.user.id)} >Accept</button>
                         <button className="requests-info__details__buttons--white" onClick={handleRejectTeamMember.bind(request.user.id)} >Remove</button>
                    </div>
                    
                </div>
                );
            })}
        </>
     
    )
}
export default RequestsTab;