import axios from 'axios';
import Spinner from 'components/application/Spinner';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import useRequests from 'useRequest/useRequest';
import RequestToJoin from '../feed/components/modals/RequestToJoin.tsx/RequestToJoin';
import ViewTeamMembers from '../feed/components/modals/ViewTeamMembers/ViewTeamMembers';
import LikedBy from '../postpage/components/LikedBy';
import TeamMembers from '../postpage/components/TeamMembers';
import CommentsOnPost from '../profile/components/RightProfileContent/CommentsOnPost';
import CommentsContainer from './components/CommentsContainer';
import Post from './components/Post';

function PostPage(props: any) {
    let postData: any = {};
    const {doRequest, errors} = useRequests({
        method: "get",
        route: "idea",
        body: null,
        onSuccess: (data: any)=>{
            postData = {
                user_id: data.data.idea.user.id,
                id: data.data.idea.id,
                team_id: data.data.idea.team_id,
                title: data.data.idea.title,
                description: data.data.idea.description,
                role: data.data.idea.user.role,
                type: 2,
                likes: data.data.idea.idea_likes,
                avatar: data.data.idea.user.avatar,
                author: data.data.idea.user.first_name + ' ' + data.data.idea.user.last_name,
                tags: data.data.idea.idea_tags.map((tag: any) => {
                    return tag.hashtag.name
                }),
                images: data.data.idea.idea_documents.map((image: any) => {
                    return image.url
                }),
                time: convertDate(data.data.idea.created_at),
                created_at: data.data.idea.created_at,
                numLikes: data.data.idea.idea_likes.length,
                numComments: data.data.idea.idea_comments.length,
            };
            }
        });
    const allPosts = useSelector((state: any)=> state.allPosts);
    const allIdeas = useSelector((state: any)=> state.allIdeas);

    
    const convertDate = (dateISO: any)=>{
        const date = new Date(dateISO);
        return `${date.getDate()} ${months[date.getMonth()]}`
    }
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let { id }: any = useParams();
    let params = useParams();
    allIdeas.forEach((post: any)=>{
        if(post.id===Number(id)){
            console.log(post);
            postData={
                user_id: post.user.id,
                id: post.id,
                team_id: post.team_id,
                title: post.title,
                description: post.description,
                role: post.user.role,
                type: 2,
                likes: post.idea_likes,
                avatar: post.user.avatar,
                author: post.user.first_name + ' ' + post.user.last_name,
                tags: post.idea_tags.map((tag: any) => {
                    return tag.hashtag.name
                }),
                images: post.idea_documents.map((image: any) => {
                    return image.url
                }),
                time: convertDate(post.created_at),
                created_at: post.created_at,
                numLikes: post.idea_likes.length,
                numComments: post.idea_comments.length,
            }
        }
    });
    if(postData==={}){
        doRequest();
    }
    // allIdeas.
    const [showOverlay, setShowOverlay] = useState(false);
    const [showTeamMembers, setShowTeamMembers] = useState(false);
    const [showRequestJoin, setShowRequestJoin] = useState(false);
    const openModal = ()=>{
        setShowOverlay(true);
        window.scrollTo(0,0);
        document.body.style.overflowY="hidden";
    }
    const closeModal = ()=>{
        setShowOverlay(false);
        setShowTeamMembers(false);
        setShowRequestJoin(false);
        document.body.style.overflowY="scroll";
    }
    const viewTeamMembers = ()=>{
        openModal();
        setShowTeamMembers(true);
    }

    const viewRequestJoin = ()=>{
        openModal();
        setShowRequestJoin(true);
    }
    const handleViewTeamMembers = ()=>{
        document.getElementById("team-members")?.scrollIntoView({behavior: "smooth"});
    }
    return (
        <div className="post-dedicated-page">
            {
                showOverlay &&
                <div>
                    <div className="modal_overlay" onClick={closeModal}></div>
                    {
                            showTeamMembers && 
                            <div>
                                <ViewTeamMembers closeModal={closeModal}/>
                            </div>
                        }
                        {
                            showRequestJoin && 
                            <div>
                                <RequestToJoin closeModal={closeModal}/>
                            </div>
                        }
                </div>
                
            }
            <div className="post-dedicated-page-post">
                {
                    postData==={} &&
                    <Spinner/>
                }
                <div className="post-dedicated-page-post-container">
                    <Post post={postData} openTeamMember={handleViewTeamMembers} openRequestJoin={viewRequestJoin} />
                    <TeamMembers postData={postData}/>
                </div>
            </div>
            <div className="post-dedicated-page-comments">
                <div className="post-dedicated-page-comments-container">
                    <CommentsContainer/>
                    <LikedBy/>
                </div>
            </div>
        </div>
    )
}

export default PostPage;


// console.log(props);
//     let postData: any = {
//         id: 1,
//         type: 1,
//         avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//         author: 'Jane Doe',
//         time: 10,
//         title: 'Project Title',
//         description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
// molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
// numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
// optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
// obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
// nihil, eveniet aliquid culpa officia aut!`,
//         tags: [
//             'OOP',
//             'JavaScript',
//             'HTML',
//             'CSS',
//             'ReactJS',
//             'NodeJS',
//             'MongoDB',
//         ],
//         images: [
//             'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
//             'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80',
//             'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
//             "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
//             "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
//             "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
//         ],
//         numLikes: 250,
//         numComments: 250,
//         completion: 80,
//     };
    // postData = allPosts.find((post: any)=>post.id===props.location.state.post_id);