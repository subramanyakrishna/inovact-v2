import React from 'react'
import LikedUser from './LikedUser'

function LikedBy() {
    const data = [
        {
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            role: "student"
        },
        {
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            role: "mentor"
        },
        {
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            role: "student"
        },
    ]
    return (
        <div>
            {
                window.innerWidth > 786 &&
                <h3>Liked By</h3>
            }
            <div>
                {
                    data.map((ele)=>{
                        return <LikedUser user = {ele}/>
                    })
                }
                <LikedUser user={data[0]}/>
            </div>
        </div>
        
    )
}

export default LikedBy;
