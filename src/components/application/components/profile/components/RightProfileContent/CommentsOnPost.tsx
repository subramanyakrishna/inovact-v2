import axios from 'axios';
import React, { useRef, useState } from 'react'
import CommentMainContent from './CommentMainContent';
import CommentReplyTag from './CommentReplyTag';
function CommentsOnPost(props: any) {
    console.log("post comments", props);
    const commentInput: any = useRef();
    const addCommentToPost = async()=>{
        const type = props.postData.type===1?"post":props.postData.type===2?"idea":"thought";
        const commentBody = {
            text: commentInput.current.value,
            article_id: props.postData.id,
            article_type: type,
        }
        console.log(commentBody);
        commentInput.current.value="";
        await axios({
            method: "POST",
            url: "https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/comment",
            data: commentBody,
            headers: {
                Authorization: localStorage.getItem("user"),
            }
        }).then((data: any)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    return (
        <div className="comments-on-posts">
            <div className="comments-on-posts-back" onClick={props.backToPost}><span>{"<< Back to post"}</span></div>
            <div >
                <p className="comments-on-posts-heading">Comments</p>
                {
                    props.commentsData?.map((comment: any)=>{
                        return <CommentMainContent comment={comment}/>
                    })
                }
                <div className="comments-on-posts-addcomment">
                    <textarea placeholder="Add a comment..." ref={commentInput}/>
                    <button onClick={addCommentToPost}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default CommentsOnPost;
