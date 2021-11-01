import React, { useEffect, useState } from 'react';
import LeftProfileContent from './components/LeftProfileContent/LeftProfileContent';
import TopProfileContent from './components/TopProfileContent/TopProfileContent';
// import Post from "../feed/components/center/Post";
import Post from "./components/RightProfileContent/Post";
import Photos from "../feed/components/center/Photos";
import {postData} from "../feed/components/center/postData";
import BlockAccount from './components/BlockAccount';
import RestrictAccount from './components/RestrictAccount';
import ReportAccount from './components/ReportAccount';
import ViewTeamMembers from '../feed/components/modals/ViewTeamMembers/ViewTeamMembers';
import CreateTeam from '../feed/components/modals/CreateTeam/CreateTeam';
import EditBio from './components/modals/EditBio';
import EditProject from './components/modals/EditProject';
import NoPostsYet from './components/LeftProfileContent/Components/NoPostsYet';
import PeopleYouMayKnow from '../connections/components/PeopleYouMayKnow';
import { useSelector } from 'react-redux';
import useRequests from 'useRequest/useRequest';
import { handleAddProjectChange, handleAllUserIdeas, handleAllUserProject, handleAllUserThoughts, handleUserInfoChange } from 'StateUpdateHelper';
import Spinner from 'components/application/Spinner';
function Profile() {
    // let leftContent, rightContent;
    // useEffect(()=>{
    //     const leftContent = document.querySelector(".profile--content-left");
    //     const rightContent = document.querySelector(".profile--content-right");
        
    // },[]);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const convertDate = (dateISO: any) => {
        const date = new Date(dateISO)
        return `${date.getDate()} ${months[date.getMonth()]}`
    }
    const {doRequest: getUserIdeas, errors: ideaErrors} = useRequests({
        method: "get",
        route: "user/idea",
        body: null,
        onSuccess: (data: any)=>{
            console.log("This is profile ideas",data);
            data.data.idea.reverse();
            handleAllUserIdeas("all-user-ideas",[...data.data.idea.map((post: any)=>({
                    user_id: post.user.id,
                    id: post.id,
                    team_id: post.team_id,
                    title: post.title,
                    description: post.description,
                    role: post.user.role,
                    type: 2,
                    likes: post.idea_likes,
                    avatar: post.user.avatar,
                    comments: post.idea_comments,
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
                }))]);
        }   
    });
    const {doRequest: getUserInfo, errors: userInfoErrors} = useRequests({
        method: 'get',
        route: "user",
        body: null,
        onSuccess: (data: any)=>{
            handleUserInfoChange("update_complete_user",data.data.user[0]);
        }
    })
    const {doRequest: getUserProjects, errors: projectErrors} = useRequests({
        method: "get",
        route: "user/post",
        body: null,
        onSuccess: (data: any)=>{
            console.log("This is profile projects",data);
            data.data.project.reverse();
            const finalData = data.data.project.map((post: any)=>({
                    user_id: post.user.id,
                    id: post.id,
                    team_id: post.team_id,
                    title: post.title,
                    description: post.description,
                    role: post.user.role,
                    type: 1,
                    likes: post.project_likes,
                    comments: post.project_comments,
                    team: post.team,
                    project_status: post.status,
                    avatar: post.user.avatar,
                    author: post.user.first_name + ' ' + post.user.last_name,
                    tags: post.project_tags.map((tag: any) => {
                        return tag.hashtag.name
                    }),
                    images: post.project_documents.map((image: any) => {
                        return image.url
                    }),
                    time: convertDate(post.created_at),
                    created_at: post.created_at,
                    numLikes: post.project_likes.length,
                    numComments: post.project_comments.length,
                }));
            console.log("This is the final user projects: ", finalData);    
            handleAllUserProject("all-user-projects",finalData);
        }   
    }); 
    const {doRequest: getUserThoughts, errors: thoughtErrors} = useRequests({
        method: "get",
        route: "user/thought",
        body: null,
        onSuccess: (data: any)=>{
            console.log("This is profile thoughts",data);
            data.data.thoughts.reverse();
            const finalData = data.data.thoughts.map((thought: any)=>({
                user_id: thought.user.id,
                id: thought.id,
                type: 3,
                avatar: thought.user.avatar,
                author:
                    thought.user.first_name +
                    ' ' +
                    thought.user.last_name,
                likes: thought.thought_likes,
                comments: thought.thought_comments,
                role: thought.user.role,
                time: convertDate(thought.created_at),
                created_at: thought.created_at,
                description: thought.thought,
                numLikes: thought.thought_likes.length,
                numComments: thought.thought_comments.length,
            }));
            console.log("This is the final user thoughts: ", finalData);    
            handleAllUserThoughts("all-user-thoughts",finalData);
        }   
    }); 
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
    ]);
    const [showLeft, setShowLeft] = useState(true);
    const [showRight, setShowRight] = useState(true);
    const [showAbout, setShowAbout] = useState(false);
    
    const [showProjects, setShowProjects] = useState(true);
    const [showIdeas, setShowIdeas] = useState(false);
    const [showThoughts, setShowThoughts] = useState(false);
    const [userProjects, setUserProjects] = useState<any>([]);
    const [userIdeas, setUserIdeas] = useState<any>([]);
    const [userThoughts, setUserThoughts] = useState<any>([]);
    const userAllProjects = useSelector((state: any)=> state.userAllProjects);
    const userAllIdeas = useSelector((state: any)=>state.userAllIdeas);
    const userAllThoughts = useSelector((state: any)=>state.userAllThoughts);
    const showProjectsOnly = ()=>{
        setShowIdeas(false);
        setShowProjects(true);
        setShowThoughts(false);
    }
    const showIdeasOnly = ()=>{
        setShowIdeas(true);
        setShowProjects(false);
        setShowThoughts(false);
    }
    const showThoughtsOnly = ()=>{
        setShowIdeas(false);
        setShowProjects(false);
        setShowThoughts(true);
    }
    useEffect(()=>{
        console.log("page loaded");
        // (async()=>{
        //     await getUserIdeas();
        //     await getUserProjects();
        // })();
        if(window.innerWidth>900){
            setShowLeft(true);
            setShowRight(true);
            setShowAbout(false);
        }
        if(window.innerWidth<=900){
            setShowLeft(false);
            setShowRight(true);
            setShowAbout(true);
        }
    },[]);
    window.addEventListener("resize",()=>{
            if(window.innerWidth>900){
                setShowLeft(true);
                setShowRight(true);
                setShowAbout(false);
            }
            if(window.innerWidth<=900){
                setShowLeft(false);
                setShowRight(true);
                setShowAbout(true);
            }
    });
       
    useEffect (()=>{
        if(window.innerWidth>900){
            setShowLeft(true);
            setShowRight(true);
            setShowAbout(false);
        }
        if(window.innerWidth<=900){
            setShowLeft(false);
            setShowRight(true);
            setShowAbout(true);
        }
        setIsLoading(true);
        (async()=>{
            if(userInfo.avatar===""){
                await getUserInfo();
            }
            await getUserIdeas();
            await getUserProjects();
            await getUserThoughts();
            
            setIsLoading(false);
        })();
      },[])
    const [showOverlay, setShowOverlay] = useState(false);
    const [showBlockUser, setShowBlockUser] = useState(false);
    const [showReportUser, setShowReportUser] = useState(false);
    const [showRestrictUser, setShowRestrictUser] = useState(false);
    const [showTeamMembers, setShowTeamMembers] = useState(false);
    const [showCreateTeam, setShowCreateTeam] = useState(false);
    
    const [showEditBio, setShowEditBio] = useState(false);
    const [showEditProject, setShowEditProject] = useState(false);
    const openModal = ()=>{
        setShowOverlay(true);
        window.scrollTo(0,0);
        document.body.style.overflowY="hidden";
    }
    
    const closeModal = ()=>{
        setShowOverlay(false);
        setShowBlockUser(false);
        setShowReportUser(false);
        setShowRestrictUser(false);
        setShowTeamMembers(false);
        setShowEditBio(false);
        setShowCreateTeam(false);
        setShowEditProject(false);
        handleAddProjectChange("project_clear_data", "");
        document.body.style.overflowY="scroll";
    }
    const blockAccount = ()=>{
        openModal();
        setShowBlockUser(true);
    }
    const restrictAccount = ()=>{
        openModal();
        setShowRestrictUser(true);
    }
    const reportAccount = () =>{
        openModal();
        setShowReportUser(true);
    }

    const viewTeamMembers =()=>{
        openModal();
        setShowTeamMembers(true);
    }
    const viewCreateTeam = ()=>{
        openModal();
        setShowCreateTeam(true);
    }
    const viewEditBio = ()=>{
        openModal();
        setShowEditBio(true);
    }
    const viewEditProject = ()=>{
        openModal();
        setShowEditProject(true);
    }
    const [isLoading, setIsLoading] = useState(false);
    const userInfo = useSelector((state: any)=>state.userInfo);
    const [projectId, setProjectId] = useState<any>(null);
    return (
        <div>
            {
                showOverlay &&
                <div className="profile-modal-cover">
                    <div className="modal-overlay-profile" onClick={closeModal}></div>
                    {
                        showBlockUser &&
                        <BlockAccount closeModal={closeModal}/>
                    }
                    {
                        showReportUser &&
                        <ReportAccount closeModal={closeModal} showBlockUser={blockAccount}/>
                    }
                    {
                        showRestrictUser &&
                        <RestrictAccount closeModal={closeModal}/>
                    }
                    {
                        showTeamMembers &&
                        <ViewTeamMembers closeModal={closeModal}/>
                    }
                    {
                        showCreateTeam && 
                        <CreateTeam closeModal={closeModal}/>
                    }
                    {
                        showEditBio &&
                        <EditBio closeModal= {closeModal}/>
                    }
                    {
                        showEditProject &&
                        <EditProject closeModal = {closeModal} id={projectId}/>
                    }
                </div>
                
                
            }

            <div className="profile--content">
                <div className="profile--content-top-container">
                    <TopProfileContent showLeft={showLeft} setShowLeft={setShowLeft} setShowRight={setShowRight} showAbout={showAbout}
                    showReportUser={reportAccount}
                    showBlockUser={blockAccount}
                    showRestrictUser={restrictAccount}
                    userInfo = {userInfo}
                    showProjectsOnly = {showProjectsOnly}
                    showIdeasOnly = {showIdeasOnly}
                    showThoughtsOnly = {showThoughtsOnly}
                    />
                </div>
                <div className="profile--content-bottom-container">
                    {
                        showLeft &&
                        <div className="profile--content-left">
                            <LeftProfileContent createTeam={viewCreateTeam} viewEditBio={viewEditBio} userInfo = {userInfo}/>
                        </div>
                    }
                    {
                        <div className="profile--content-right">
                            {
                                isLoading &&
                                <Spinner/> 
                            }
                            {
                                showIdeas && 
                                userAllIdeas.length!==0 &&
                                userAllIdeas.map((post: any, idx: any) => {
                                return <Post key={idx} post={post} openTeamMember={viewTeamMembers} viewEditProject={viewEditProject}/>
                                })
                            }
                            {
                                showIdeas &&
                                userAllIdeas.length===0 &&
                                <div className="profile--content-right">
                                    <NoPostsYet postType="ideas"/>
                                    <PeopleYouMayKnow/>
                                </div>
                            }
                            {
                                showProjects && 
                                userAllProjects.length!==0 &&
                                userAllProjects.map((post: any, idx: any) => {
                                    return <Post key={idx} post={post} openTeamMember={viewTeamMembers} viewEditProject={viewEditProject} editProject={setProjectId}/>
                                })
                            }
                            {
                                showProjects &&
                                userAllProjects.length===0 &&
                                <div className="profile--content-right">
                                    <NoPostsYet postType="projects"/>
                                    <PeopleYouMayKnow/>
                                </div>
                            }
                            {
                                showThoughts && 
                                userAllThoughts.length!==0 &&
                                userAllThoughts.map((post: any, idx: any) => {
                                    return <Post key={idx} post={post} openTeamMember={viewTeamMembers} viewEditProject={viewEditProject}/>
                                })
                            }
                            {
                                showThoughts &&
                                userAllThoughts.length===0 &&
                                <div className="profile--content-right">
                                    <NoPostsYet postType="thoughts"/>
                                    <PeopleYouMayKnow/>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
