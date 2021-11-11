import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function LikedUser(props: any) {
    const user_id = useSelector((state: any) => state.userInfo.id)
    return (
        <div className="post-dedicated-liked-by">
            <div className="post-dedicated-liked-by-container">
                <div className="post-dedicated-liked-by-img-container">
                    {props.user.user.id === user_id ? (
                        <img src={props.user.user.avatar} alt="user" />
                    ) : (
                        <Link
                            to="/app/otherprofile"
                            onClick={() => {
                                localStorage.setItem(
                                    'other-user',
                                    props.user.user.id
                                )
                            }}
                        >
                            <img src={props.user.user.avatar} alt="user" />
                        </Link>
                    )}
                </div>
                <p>{props.user.user.first_name}</p>
                <p style={{ color: '#02bd63', fontSize: 'medium' }}>
                    {props.user.user.role}
                </p>
            </div>
        </div>
    )
}

export default LikedUser
