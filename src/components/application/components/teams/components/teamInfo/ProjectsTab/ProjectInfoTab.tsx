import React from 'react'
import ProjectInfo from 'components/application/components/teams/components/teamInfo/ProjectsTab/ProjectInfo'

    
const ProjectInfoTab =(props: any)=>{
    return(
        <>
        <div className="member-info-tab">
        {
            props.team.projects.map((project :any,index:number)=>{
                return(
                   <ProjectInfo project={project} viewDeleteMember={props.viewDeleteMember} viewMakeAdmin={props.viewMakeAdmin}/>
                );
            })}
            <button className="text-style--bold text-color--green member-info-tab__addFile" onClick={props.viewInviteMember} >
                     Invite Members <span className="text-style--bold text-color--green member-info-tab__addFile__icon">+ </span>
            </button>
        </div>
        </>
    )
}
export default ProjectInfoTab;