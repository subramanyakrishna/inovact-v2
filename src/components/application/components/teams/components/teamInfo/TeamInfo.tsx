import React from 'react';
import TeamInfoTabs from 'components/application/components/teams/components/teamInfo/TeamInfoTabs';

const TeamInfo =(props:any)=>{
  return (
    <>
    <div className="teams-info">
      <div className="teams-info__details">
        <p>Total members {props.team.team_members.length} members</p>
        <div  className='teams-info__details--dropdown text-color--green text-style--bold' onClick= {() => props.viewInviteMember(props.team.id)}>
             Invite Team Members 
        </div>
      </div>
    
      <div className="teams-info__tabs">
         <TeamInfoTabs team={props.team} viewUploadDocument={props.viewUploadDocument} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin} viewInviteMember={props.InviteMember}/>
      </div>
    </div>
      
    </>
    )
}
export default TeamInfo;