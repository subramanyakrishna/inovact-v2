import TeamMemberTag from './TeamMemberTag'

const TeamMembers = (props: any)=> {
    const data = {
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Jane Doe',
        role: "Role",
    }
    return (
        <div className="post-dedicated-team-members-page" id="team-members">
            <div className="post-dedicated-team-members-page-top">
                <p className="post-dedicated-team-members-page-title">Members</p>
                <div className="post-dedicated-team-members-page-status">
                    <p>Project Status:</p>
                    <p style={{color: "#02bd63"}}>In Progress</p>
                </div>
            </div>
            <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
            <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
            <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
            <TeamMemberTag avatar={data.avatar} name={data.name} role={data.role}/>
        </div>
    )
};

export default TeamMembers;
