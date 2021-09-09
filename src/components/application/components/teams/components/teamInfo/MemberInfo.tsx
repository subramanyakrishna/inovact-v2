import React from 'react'
import tel from 'images/teams/tel.svg'
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
    

const MemberInfo =()=>{
    return(
        <>
        {
            teamInfo.map((item,index)=>{
                return(
                    <div className="members-info">
                    <div className="members-info__details">
                        <img src={item.image} alt="name"/>
                        <h5 className="members-info__details__title">{item.name}</h5>
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
                );
            })}
        </>
     
    )
}
export default MemberInfo;