import React, { useState } from 'react'
import CommentMainContent from '../../profile/components/RightProfileContent/CommentMainContent';

function CommentsOnPost(props: any) {

    return (
        <div className="comments-on-posts">
            <div className="comments-on-posts-back"><span>{"<< Back to feed"}</span></div>
            <div >
                <p className="comments-on-posts-heading">Comments</p>
                <div className="comments-on-posts-addcomment">
                    <textarea placeholder="Add a comment..."/>
                    <button>Post</button>
                </div>
                <br/>
                <CommentMainContent/>
            </div>
        </div>
    )
}

export default CommentsOnPost;
