import React from 'react'
import IdeaInfo from 'components/application/components/otheruserteam/components/teamInfo/IdeasTab/IdeaInfo'

    
const IdeaInfoTab =(props: any)=>{
    return(
        <>
        <div className="member-info-tab">
        { props.team.ideas.length == 0 ? <div className="text-align--center">No Ideas yet </div>: null }
        {
            props.team.ideas.map((idea :any,index:number)=>{
                return(
                   <IdeaInfo idea={idea}/>
                
                );
            })}
            <button className="text-style--bold text-color--green member-info-tab__addFile" onClick={props.viewInviteMember} >
                     Invite Members <span className="text-style--bold text-color--green member-info-tab__addFile__icon">+ </span>
            </button>
        </div>
        </>
    )
}
export default IdeaInfoTab;