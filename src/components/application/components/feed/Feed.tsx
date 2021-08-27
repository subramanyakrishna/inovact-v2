import React from 'react'
import LeftNavBar from './components/leftnav/LeftNavBar'
import CreatePost from './components/center/CreatePost'
import RightNavBar from 'components/application/components/feed/components/rightnav/RightNavBar'

function Feed() {
    return (
        <div className="feed__content">
            <div className="feed__content__left">
                <LeftNavBar />
            </div>
            <div className="feed__content__center">
                <CreatePost />
            </div>
            <div className="feed__content__right">
                <RightNavBar />
            </div>
        </div>
    )
}

export default Feed
