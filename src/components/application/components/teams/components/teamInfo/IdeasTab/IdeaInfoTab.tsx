import React from 'react'
import IdeaInfo from 'components/application/components/teams/components/teamInfo/IdeasTab/IdeaInfo'

    
const IdeaInfoTab =(props: any)=>{
    return(
        <>
        <div className="member-info-tab">
        {/* {
            props.team.ideas.map((idea :any,index:number)=>{
                return(
                //    <IdeaInfo idea={idea} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin}/>
                <h1>ideas</h1>
                );
            })} */}
            <button className="text-style--bold text-color--green member-info-tab__addFile" onClick={props.viewInviteMember} >
                     Invite Members <span className="text-style--bold text-color--green member-info-tab__addFile__icon">+ </span>
            </button>
        </div>
        </>
    )
}
export default IdeaInfoTab;