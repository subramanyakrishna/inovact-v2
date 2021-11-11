import React from 'react'

function UserTag(props: any) {
    return (
        <div className="user-tag-main">
            <img src={props.img} className="user-tag-img" />
            <span className="user-tag-name">{props.name}</span>
        </div>
    )
}

export default UserTag
