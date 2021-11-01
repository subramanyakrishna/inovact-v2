import { useState } from 'react';
import { useSelector } from 'react-redux';
import LikedBy from './LikedBy';
import TeamMemberTag from './TeamMemberTag'

const TeamMembers = (props: any)=> {
    const data = {
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Jane Doe',
        role: "Role",
    }
    const [showLikedBy, setShowLikedBy] = useState(false);
    const viewLikedBy = ()=>{
        setShowLikedBy(true);
    }
    const viewMembers = ()=>{
        setShowLikedBy(false);
    }
    return (
        <div className="post-dedicated-team-members-page" id="team-members">
            <div className="post-dedicated-team-members-page-top">
                <p className="post-dedicated-team-members-page-title" onClick={viewMembers}>Members</p>
                {
                    window.innerWidth <= 992 &&
                    <p className="post-dedicated-team-members-page-title" onClick={viewLikedBy}>Liked By</p>
                }
                {
                    window.innerWidth >= 992 &&  
                    props.postData.type!==2 && 
                    <div className="post-dedicated-team-members-page-status">
                        <p>Project Status:</p>
                        <p style={{color: "#02bd63"}}>{props.postData.status}</p>
                    </div>
                }
            </div>
            {
                !showLikedBy &&
                <div>
                    {
                        props.postData.team?
                        props.postData.team.team_members.map((mem: any)=>{
                            return <TeamMemberTag avatar={mem.user.avatar} name={mem.user.first_name+" "+mem.user.last_name} role={mem.user.role}/>
                        }):
                        <p>This is an individual project.</p>
                    }
                    {/* <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
                    <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
                    <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
                    <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/> */}
                </div>
            }
            {
                showLikedBy && 
                <LikedBy/>
            }
        </div>
    )
};

export default TeamMembers;
