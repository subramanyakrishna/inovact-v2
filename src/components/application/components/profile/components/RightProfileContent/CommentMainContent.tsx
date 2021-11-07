import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CommentReplyTag from './CommentReplyTag';

function CommentMainContent(props: any) {
    const [showReplies, setShowReplies] = useState(false);
    const toggleShowReplies = ()=>{
        console.log("Toggles replies");
        setShowReplies(!showReplies);
    }
    const image = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    const replyData=[
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            time: "10:20 pm",
            tag: "JaneDoe",
            comment: "Project dA fermentum posuere tellus leo bibendum nibh. sed Sed commodo ",
        },
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            time: "10:20 pm",
            tag: "JaneDoe",
            comment: "Project dA fermentum posuere tellus leo bibendum nibh. sed Sed commodo ",
        },
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            time: "10:20 pm",
            tag: "JaneDoe",
            comment: "Project dA fermentum posuere tellus leo bibendum nibh. sed Sed commodo ",
        },
        {
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            name: "Jane Doe",
            time: "10:20 pm",
            tag: "JaneDoe",
            comment: "Project dA fermentum posuere tellus leo bibendum nibh. sed Sed commodo ",
        },
    ]
    const commentDate = new Date(props.comment?.created_at);
    const user_id = useSelector((state: any)=> state.userInfo.id);
    console.log(props);
    return (
        <div className="comments-on-posts-contents">
                    <div className="comments-on-posts-img-container">
                        {
                            props.comment?.user?.id === user_id ?
                            <img src={props.comment?.user?.avatar} alt="user"/>:
                            <Link
                                    to="/app/otherprofile"
                                    onClick={() => {
                                        console.log(
                                            'to="/app/otherprofile"',
                                            props.comment.user.id
                                        )
                                        localStorage.setItem(
                                            'other-user',
                                            props.comment.user.id
                                        )
                                    }}
                            >
                                <img src={props.comment?.user?.avatar} alt="user"/>
                            </Link>
                        }
                    </div>
                    <div className="comments-on-posts-main-comment-container">
                        <div>
                            <p className="comments-on-posts-user-name">{props.comment?.user?.first_name} {props.comment?.user?.last_name}</p>
                            <p className="comments-on-posts-comment-time">{commentDate.getDate()+"-"+commentDate.getMonth()+"-"+commentDate.getFullYear()}</p>
                        </div>
                        <div className="comments-on-posts-comment-contents">
                            <div className="comments-on-posts-comment">
                                {props.comment?.text} 
                            </div>
                            {/* {
                                <div className="comments-on-posts-replies-container">
                                    <div className="comments-on-posts-replies-view">
                                        <hr className="comments-on-posts-replies-view-separator"/>
                                        <div onClick={toggleShowReplies}>
                                            <span>{"< "}</span>
                                            <span>View 30 replies</span>
                                        </div>
                                    </div>
                                    <div className="comments-on-posts-all-replies">
                                        {
                                            showReplies &&
                                            <div>
                                                {
                                                    replyData.map((reply: any)=>{
                                                        return <CommentReplyTag img={reply.img} name={reply.name} time={reply.time} tag={reply.tag} comment={reply.comment}/>
                                                        })
                                                }
                                                
                                            </div>
                                            
                                        }
                                    </div>
                                            <div className="comments-on-posts-addcomment">
                                                <textarea placeholder="Reply to comment..."/>
                                                <button>Post</button>
                                            </div>
                                    
                                </div>
                            } */}
                        </div>
                        
                    </div>
                </div>
    )
}

export default CommentMainContent;
