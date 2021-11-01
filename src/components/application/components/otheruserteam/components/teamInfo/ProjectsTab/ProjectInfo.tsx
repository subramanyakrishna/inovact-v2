import React from 'react'
import {Link} from 'react-router-dom'
const ProjectInfo =(props:any)=>{
                return(
                    <div className="members-info">
                        <div className="members-info__details">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="name"/>
                            <h5 className="text-size--big">{props.project.title}</h5>
                        </div>
                
                        <div className="members-info__details--contact">
                                <h5 className="text-size--big">{props.project.status ? 'Completed' : 'In Progress'}</h5>
                        </div>   
                        <Link to={`/posts/${props.project.id}`}>
                        <button className="connect-button">View More</button>
                            </Link>  
                        </div>
                );
}
export default ProjectInfo;