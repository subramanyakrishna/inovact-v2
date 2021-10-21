import React from 'react'

function NoPostsYet(props: any) {
    return (
        <div className="user-not-posted-anything">
            <p className="user-not-posted-anything-content">{props.name?props.name:"User"} has not posted any {props.postType} yet.</p>
        </div>
    )
}

export default NoPostsYet;
