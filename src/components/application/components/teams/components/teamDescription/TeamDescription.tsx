import React from 'react'
const teamInfo =
    {
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        progress:75
    }

const TeamDescription =()=>{
    return(
        <div className="team-description">
           <div className="team-description__info">
               <img src={teamInfo.image} alt="teamImage" />
               <p>{teamInfo.description}</p>
           </div>
           <div className="team-description__info__progress">
                {teamInfo.progress}
           </div>
        </div>
    )
}
export default TeamDescription;