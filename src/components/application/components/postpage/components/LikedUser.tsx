import React from 'react'

function LikedUser(props: any) {
    console.log(props);
    return (
        <div className="post-dedicated-liked-by">
            <div className="post-dedicated-liked-by-container">
                <div className="post-dedicated-liked-by-img-container">
                <img src={props.user.user.avatar} alt="user"/>
                </div>
                <p>{props.user.user.first_name}</p>
                <p style={{color: "#02bd63", fontSize: "medium"}}>{props.user.user.role}</p>
            </div>
            
        </div>
    )
}

export default LikedUser;
