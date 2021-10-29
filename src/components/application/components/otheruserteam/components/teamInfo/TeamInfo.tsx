import React from 'react';
import TeamInfoTabs from 'components/application/components/otheruserteam/components/teamInfo/TeamInfoTabs';

const TeamInfo =(props:any)=>{
  return (
    <>
    <div className="teams-info">

      <div className="teams-info__tabs" style={{marginTop:'1rem'}}>
         <TeamInfoTabs team={props.team} viewUploadDocument={props.viewUploadDocument} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin} viewInviteMember={props.InviteMember}/>
      </div>
    </div>
      
    </>
    )
}
export default TeamInfo;