import React, { useEffect, useState } from 'react'
import LeftNavBar from './components/leftnav/LeftNavBar'
import CreatePost from './components/center/CreatePost'
import RightNavBar from 'components/application/components/feed/components/rightnav/RightNavBar'
import Post from './components/center/Post'
import { postData } from './components/center/postData'
import UploadProject from './components/modals/UploadProject/UploadProject';
import UploadIdea from './components/modals/UploadIdea/UploadIdea'
import UploadThought from './components/modals/UploadThought/UploadThought'
import CreateTeam from './components/modals/CreateTeam/CreateTeam'
import ViewTeamMembers from './components/modals/ViewTeamMembers/ViewTeamMembers'
import RequestToJoin from './components/modals/RequestToJoin.tsx/RequestToJoin'

function Feed() {
    const [posts, setPosts] = useState<postData[]>([
        {
            id: '1',
            type: 1,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            title: 'Project Title',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            tags: [
                'OOP',
                'JavaScript',
                'HTML',
                'CSS',
                'ReactJS',
                'NodeJS',
                'MongoDB',
            ],
            images: [
                'https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
                'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80',
                'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',
                "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
                "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
                "https://www.lifewire.com/thmb/cobvsxBXqwdPzm17STO4o8pAdgA=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-zoom-and-how-does-it-work-b1cab4b7f8e9474fa46f5b50c8e694e4.jpg",
            ],
            numLikes: 250,
            numComments: 250,
            completion: 80,
        },
        {
            id: '2',
            type: 2,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            title: 'Idea Title',
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            tags: [
                'OOP',
                'JavaScript',
                'HTML',
                'CSS',
                'ReactJS',
                'NodeJS',
                'MongoDB',
            ],
            numLikes: 250,
            numComments: 250,
        },
        {
            id: '3',
            type: 3,
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            author: 'Jane Doe',
            time: 10,
            description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
 numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
 optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
 obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
 nihil, eveniet aliquid culpa officia aut!`,
            numLikes: 250,
            numComments: 250,
        },
    ])

    const [showOverlay, setShowOverlay] = useState(false);
    const [showUploadProject, setShowUploadProject] = useState(false);
    const [showUploadIdea, setShowUploadIdea] = useState(false);
    const [showUploadThought, setShowUploadThought] = useState(false);
    const [showCreateTeam, setShowCreateTeam] = useState(false);
    const [showTeamMembers, setShowTeamMembers] = useState(false);
    const [showRequestJoin, setShowRequestJoin] = useState(false);
    const openModal = ()=>{
        setShowOverlay(true);
        window.scrollTo(0,0);
        document.body.style.overflowY="hidden";
    }
    const closeModal = ()=>{
        setShowOverlay(false);
        setShowUploadProject(false);
        setShowUploadIdea(false);
        setShowUploadThought(false);
        setShowCreateTeam(false);
        setShowTeamMembers(false);
        setShowRequestJoin(false);
        document.body.style.overflowY="scroll";
    }
    
    const uploadProject = ()=>{
        openModal();
        setShowUploadProject(true);
    }
    const uploadIdea = ()=>{
        openModal();
        setShowUploadIdea(true);
    }
    const uploadThought = ()=>{
        openModal();
        setShowUploadThought(true);
    }
    const createTeam = ()=>{
        openModal();
        setShowCreateTeam(true);
    }

    const viewTeamMembers = ()=>{
        openModal();
        setShowTeamMembers(true);
    }

    const viewRequestJoin = ()=>{
        openModal();
        setShowRequestJoin(true);
    }

    return (
        <div>
            {
                showOverlay &&
                <div>
                    <div className="modal_overlay" onClick={closeModal}></div>
                    {
                        showUploadProject &&
                        <div>
                            <UploadProject closeModal={closeModal}/>
                        </div>
                        }

                        {
                            showUploadIdea &&
                            <div>
                                <UploadIdea closeModal={closeModal}/>
                            </div>
                        }

                        {
                            showUploadThought && 
                            <div>
                                <UploadThought closeModal={closeModal}/>
                            </div>
                        }
                        {
                            showCreateTeam &&
                            <div>
                                <CreateTeam closeModal={closeModal}/>
                            </div>
                        }
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

            <div className="feed__content">
                <div className="feed__content__left">
                    <LeftNavBar openCreateTeam={createTeam}/>
                </div>
                <div className="feed__content__center">
                    <CreatePost openProject={uploadProject} openIdea={uploadIdea} openThought={uploadThought} />
                    {posts.map((post, idx) => {
                        return <Post key={idx} post={post} openTeamMember={viewTeamMembers} openRequestJoin={viewRequestJoin}/>
                    })}
                </div>
                <div className="feed__content__right">
                    <RightNavBar />
                </div>
            </div>
        </div>
        
    )
}

export default Feed;
