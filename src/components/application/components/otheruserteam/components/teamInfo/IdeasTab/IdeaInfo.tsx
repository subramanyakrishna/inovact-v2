import React from 'react'
import {Link} from 'react-router-dom'

const IdeaInfo =(props:any)=>{
                return(
                    <div className="members-info">
                        <div className="members-info__details">
                            <h5 className="text-size--big">{props.idea.title} </h5>
                        </div>
                        <Link to={`/ideas/${props.idea.id}`}> 
                        <button className="connect-button">View More</button>
                            </Link>   
                    </div>
                      
                );
}
export default IdeaInfo;