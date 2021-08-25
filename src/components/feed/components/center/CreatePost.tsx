import React from 'react'
import avatar from 'images/feed/user-avatar.png'
import add from 'images/feed/add.svg'

function CreatePost() {
    return (
        <>
            <div className="create-post">
                <div className="create-post__avatar">
                    <img src={avatar} alt="Avatar" />
                </div>
                <div className="create-post__content">
                    <h1>What's on your mind, Matt?</h1>
                    <div className="create-post__content__options">
                        <div className="create-post__content__options__button">
                            New Project
                        </div>
                        <div className="create-post__content__options__button">
                            New Idea
                        </div>
                        <div className="create-post__content__options__button">
                            New Thoughts
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating-button">
                <img src={add} alt="" />
            </div>
        </>
    )
}

export default CreatePost
