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
    

const RequestsTab =()=>{
    return(
        <>
        {
            teamInfo.map((item,index)=>{
                return(
                    <div className="requests-info">
                     <div className="requests-info__details">
                        <img src={item.image} alt="name"/>
                        <div className="requests-info__details__text">
                            <h5 className="requests-info__details__title">{item.name}</h5>
                            <p className="sub-title--small">Designation</p>
                            <p className="muted--small">Java,HTML</p>
                        </div>
                        
                    </div>
            
                    
                    <div className="requests-info__details__buttons">
                             <button className="requests-info__details__buttons--accept">Accept</button>
                         <button className="requests-info__details__buttons--white">Remove</button>
                    </div>
                    
                </div>
                );
            })}
        </>
     
    )
}
export default RequestsTab;