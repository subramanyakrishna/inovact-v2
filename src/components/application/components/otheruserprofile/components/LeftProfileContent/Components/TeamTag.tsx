function TeamTag(props: any) {
    return (
        <div className="team-tag">
            <div className="team-tag-img-container">
                <img src={props.img} alt="img" />
            </div>
            <div className="team-tag-content">
                <span className="team-tag-content-name">{props.teamName}</span>
                <span className="team-tag-content-members">
                    {props.membersCount} members
                </span>
            </div>
        </div>
    )
}

export default TeamTag
