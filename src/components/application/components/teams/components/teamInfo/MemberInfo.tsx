import React from 'react'
import tel from 'images/teams/tel.svg'
import menu from 'images/teams/more.svg'


const teamInfo =
    {
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        description:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        progress:75
    }

const MemberInfo =()=>{
    return(
        <div className="members-info">  
            <div className="members-info__details">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="name"/>
                <h5 className="members-info__details__title">Member Name</h5>
            </div>
    
            <div className="members-info__details--contact">
                    <img src={tel} alt="tel"/>
                    <h5 className="members-info__details__title">Contact Information</h5>
            </div>
            
            <div className="members-info__details--role">
                    <h5 className="members-info__details__title">Role</h5>
                    <img src={menu} alt="menu"/>
            </div>
        </div>
    )
}
export default MemberInfo;