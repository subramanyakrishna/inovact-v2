import React from 'react'
import msg from 'images/teams/msg.svg'
import menu from 'images/teams/more.svg'

const teamInfo =[
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    },
    {
        name:'Jane Doe',
        image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        role:'student'
    }
]
    

const InviteMembers =()=>{
    return(
        <>
        
               <div className="invite-members">
               <div className="invite-members__searchbar">
                   SearchBox
               </div>
         {  teamInfo.map((item,index)=>{
                return(
                    <div className="invite-members__details">
                        <img src={item.image} alt="name"/>
                        <h5 className="invite-members__details__title">{item.name}</h5>
                        <div className="invite-members__details__buttons">
                             <button className="invite-members__details__buttons--accept">Invite</button>
                         </div>
                    </div>
                );
            })}
            </div>
        </>
     
    )
}
export default InviteMembers;