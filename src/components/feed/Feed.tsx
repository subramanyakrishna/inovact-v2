import React from 'react'
import Navbar from 'components/feed/components/NavBar'
import RightNavBar from 'components/feed/components/rightnav/RightNavBar'
import LeftNavBar from 'components/feed/components/leftnav/LeftNavBar'
import CreatePost from 'components/feed/components/center/CreatePost'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__nav">
                <Navbar />
            </div>
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
        </div>
    )
}

export default Feed
