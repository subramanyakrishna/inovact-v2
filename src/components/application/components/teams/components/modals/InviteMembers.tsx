import React from 'react'
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
function InviteMembers(props:any) {
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" >&times;</button>
                <label className="modal_cover-title">Invite Members</label>
                <div className="modal_part_one">
                <div className="invite-members">
                { teamInfo.map((item,index)=>{
                return(
                    <div className="invite-members__details">
                        <div className="invite-members__text">
                            <img src={item.image} alt="name"/>
                            <h5 className="invite-members__details__title">{item.name}</h5>
                        </div>
                             <button className="connect-button">Invite</button>
                    </div>
                );
            })}
            </div>
                </div>                
            </div>
        </div>
    )
}

export default InviteMembers;