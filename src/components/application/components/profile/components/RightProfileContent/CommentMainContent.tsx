import React, {useState} from 'react'
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
    console.log(props);
    return (
        <div className="comments-on-posts-contents">
                    <div className="comments-on-posts-img-container">
                        <img src={props.comment?.user?.avatar} alt="user"/>
                    </div>
                    <div className="comments-on-posts-main-comment-container">
                        <div>
                            <p className="comments-on-posts-user-name">{props.comment?.user?.first_name} {props.comment?.user?.last_name}</p>
                            <p className="comments-on-posts-comment-time">10:20 pm</p>
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
