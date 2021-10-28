import React from 'react'

function LikedUser(props: any) {
    return (
        <div className="post-dedicated-liked-by">
            <div className="post-dedicated-liked-by-container">
                <div className="post-dedicated-liked-by-img-container">
                <img src={props.user.avatar} alt="user"/>
                </div>
                <p>{props.user.name}</p>
                <p style={{color: "#02bd63", fontSize: "medium"}}>{props.user.role}</p>
            </div>
            
        </div>
    )
}

export default LikedUser;
