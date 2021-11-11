import React from 'react'
import { Link } from 'react-router-dom'
const ProjectInfo = (props: any) => {
    return (
        <div className="members-info">
            <div className="members-info__details">
                <h5 className="text-size--big">{props.project.title}</h5>
            </div>

            <div className="members-info__details--contact">
                <h5 className="text-size--big">
                    {props.project.status ? 'Completed' : 'In Progress'}
                </h5>
            </div>
            <Link to={`/posts/${props.project.id}`}>
                <button className="connect-button">View More</button>
            </Link>
        </div>
    )
}
export default ProjectInfo
