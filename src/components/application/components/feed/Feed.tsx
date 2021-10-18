import React, { useEffect, useState } from 'react'
import LeftNavBar from './components/leftnav/LeftNavBar'
import CreatePost from './components/center/CreatePost'
import RightNavBar from 'components/application/components/feed/components/rightnav/RightNavBar'
import Post from './components/center/Post'
import { postData } from './components/center/postData'
import UploadProject from './components/modals/UploadProject/UploadProject'
import UploadIdea from './components/modals/UploadIdea/UploadIdea'
import UploadThought from './components/modals/UploadThought/UploadThought'
import CreateTeam from './components/modals/CreateTeam/CreateTeam'
import ViewTeamMembers from './components/modals/ViewTeamMembers/ViewTeamMembers'
import RequestToJoin from './components/modals/RequestToJoin.tsx/RequestToJoin'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SortByDropdown from 'components/application/components/feed/components/SortByDropdown'
import useRequests from 'useRequest/useRequest'
import Spinner from 'components/application/Spinner'
import {
    handleAddIdeaChange,
    handleAddProjectChange,
    handleAddThoughtChange,
    handleAllIdeas,
    handleAllPosts,
    handleAllUserIdeas,
    handleAllUserProject,
} from '../../../../StateUpdateHelper'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SmallSpinner from 'components/application/SmallSpinner'
import { useDispatch } from 'react-redux'
import { getTeams } from 'redux/actions/teams'

function Feed() {
    //userPool.getCurrentUser(); console log to see the idtoken
    const [posts, setPosts] = useState<postData[]>([])
    const [ideas, setIdeas] = useState<postData[]>([])
    const [peopleToKnow, setPeopleToKnow] = useState<any>([])
    const [thoughts, SetThoughts] = useState<postData[]>([])
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
    const userInfo = useSelector((state: any) => state.userInfo);
    const allPosts = useSelector((state: any) => state.allPosts);
    const allIdeas = useSelector((state: any) => state.allIdeas);

    const history = useHistory();
    const convertDate = (dateISO: any) => {
        const date = new Date(dateISO)
        return `${date.getDate()} ${months[date.getMonth()]}`
    }
    const { doRequest: userGet, errors: userErrors } = useRequests({
        route: 'user',
        method: 'get',
        body: null,
        onSuccess: (data: any) => {
            console.log(data)
        },
    })
    const { doRequest: getPeopleToKnow, errors: getPeopleErrors } = useRequests(
        {
            route: 'users',
            method: 'get',
            body: null,
            onSuccess: (data: any) => {
                data.data.user.reverse()
                const ptk: any = data.data.user.map((ele: any) => ({
                    user_id: ele.id,
                    name: ele.first_name,
                    image: ele.avatar,
                    duration: '10 min',
                    designation: ele.designation ? ele.designation : 'Student',
                })).filter((ele: any)=>{
                    console.log(ele.user_id, userInfo.id);
                    return ele.user_id!==userInfo.id});
                console.log(ptk);
                setPeopleToKnow([...ptk.slice(0, 4)])
            },
        }
    )
    const { doRequest, errors } = useRequests({
        route: 'post',
        method: 'get',
        body: null,
        onSuccess: (data: any)=>{
            console.log(data);
            data.data.project.reverse();
            handleAllPosts("all-posts", [...data.data.project,...allPosts]);
            setPosts([...data.data.project.map((post: any)=>({
                user_id: post.user.id,
                id: post.id,
                title: post.title,
                description: post.description,
                role:post.user.role,
                type: 1,
                avatar: post.user.avatar,
                author: post.user.first_name+ " "+ post.user.last_name,
                tags: post.project_tags.map((tag: any)=>{
                    return tag.hashtag.name;
                }),
                images: post.project_documents.map((image: any)=>{
                    console.log(image.url);
                    return image.url;
                }),
                time: convertDate(post.created_at),
                numLikes: 0,
                numComments: 0,
                }))]);
                // window.location.reload();
        }
    });
    const userAvatarName = ()=>{
        
    }
    const {doRequest: doRequestIdea, errors: errorsIdea} = useRequests({
        route: "idea",
        method: "get",
        body: null,
        onSuccess: (data: any)=>{
            data.data.idea.reverse();
            console.log("on success of ideas");
            handleAllIdeas("all-ideas", [...data.data.idea,...allIdeas]);
            setIdeas([...data.data.idea.map((post: any)=>({
                user_id: post.user.id,
                id: post.id,
                title: post.title,
                description: post.description,
                role:post.user.role,
                type: 2,
                avatar: post.user.avatar,
                author:  post.user.first_name+ " "+ post.user.last_name,
                tags: post.idea_tags.map((tag: any)=>{
                    return tag.hashtag.name;
                }),
                images: post.idea_documents.map((image: any)=>{
                    console.log(image.url);
                    return image.url;
                }),
                time: convertDate(post.created_at),
                numLikes: 0,
                numComments: 0,
                }))]);
        }
    });
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
                title: post.title,
                description: post.description,
                type: 2,
                avatar: post.user.avatar,
                author:  post.user.first_name+ " "+ post.user.last_name,
                tags: post.idea_tags.map((tag: any)=>{
                    return tag.hashtag.name;
                }),
                images: post.idea_documents.map((image: any)=>{
                    console.log(image.url);
                    return image.url;
                }),
                time: convertDate(post.created_at),
                numLikes: 0,
                numComments: 0,
                }))]);
        }   
    });
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
                title: post.title,
                description: post.description,
                type: 1,
                avatar: post.user.avatar,
                author: post.user.first_name+ " "+ post.user.last_name,
                tags: post.project_tags.map((tag: any)=>{
                    return tag.hashtag.name;
                }),
                images: post.project_documents.map((image: any)=>{
                    return image.url;
                }),
                time: convertDate(post.created_at),
                numLikes: 0,
                numComments: 0,
                }));
            console.log("This is the final user projects: ", finalData);    
            handleAllUserProject("all-user-projects",finalData);
        }   
    }); 
    useEffect(()=>{
        (async ()=>{
            await doRequest();
            await doRequestIdea();
            await getPeopleToKnow();
            await getUserIdeas();
            await getUserProjects();
        })();
        // if(!(userInfo.profile_complete)){
        //     history.push("/userinfo");
        // }
    }, [])
    // useEffect(() => {
    //     if (!userInfo.profile_complete) {
    //         history.push('/userinfo')
    //     }
    // })
    const [showFilter, setShowFilter] = useState(false)

    const [showOverlay, setShowOverlay] = useState(false)
    const [showUploadProject, setShowUploadProject] = useState(false)
    const [showUploadIdea, setShowUploadIdea] = useState(false)
    const [showUploadThought, setShowUploadThought] = useState(false)
    const [showCreateTeam, setShowCreateTeam] = useState(false)
    const [showTeamMembers, setShowTeamMembers] = useState(false)
    const [showRequestJoin, setShowRequestJoin] = useState(false)
    const [currentFilter, setCurrentFilter] = useState('All')
    const [filteredPosts, setFilteredPosts] = useState<postData[]>([])

    useEffect(() => {
        if (posts.length && ideas.length) {
            setFilteredPosts([...posts, ...ideas])
        }
    }, [posts, ideas])
    const filterOptionSelector = (type: string) => {
        setCurrentFilter(type)
        if (type == 'All') {
            setFilteredPosts([...posts, ...ideas])
            return
        }
        const filters: any = {
            Projects: posts,
            Ideas: ideas,
            Thoughts: thoughts,
        }
        setFilteredPosts(filters[type])
    }
    const openModal = () => {
        setShowOverlay(true)
        window.scrollTo(0, 0)
        document.body.style.overflowY = 'hidden'
    }
    const closeModal = () => {
        setShowOverlay(false)
        setShowUploadProject(false)
        setShowUploadIdea(false)
        setShowUploadThought(false)
        setShowCreateTeam(false)
        setShowTeamMembers(false)
        setShowRequestJoin(false)
        handleAddIdeaChange('idea_clear_data', '')
        handleAddProjectChange('project_clear_data', '')
        handleAddThoughtChange('thought_clear_data', 'null')
        document.body.style.overflowY = 'scroll'
    }

    const uploadProject = () => {
        openModal()
        handleAddProjectChange('user_id', userInfo.id)
        setShowUploadProject(true)
    }
    const uploadIdea = () => {
        openModal()
        setShowUploadIdea(true)
    }
    const uploadThought = () => {
        openModal()
        setShowUploadThought(true)
    }
    const createTeam = () => {
        openModal()
        setShowCreateTeam(true)
    }

    const viewTeamMembers = () => {
        openModal()
        setShowTeamMembers(true)
    }

    const viewRequestJoin = () => {
        openModal()
        setShowRequestJoin(true)
    }
    const handleFilterShow = () => {
        setShowFilter(!showFilter)
    }

    const allTeams = useSelector((state: any) => state.teams)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTeams('user'))
    }, [])

    return (
        <div>
            {showOverlay && (
                <div>
                    <div className="modal_overlay" onClick={closeModal}></div>
                    {showUploadProject && (
                        <div>
                            <UploadProject closeModal={closeModal} />
                        </div>
                    )}

                    {showUploadIdea && (
                        <div>
                            <UploadIdea closeModal={closeModal} />
                        </div>
                    )}

                    {showUploadThought && (
                        <div>
                            <UploadThought closeModal={closeModal} />
                        </div>
                    )}
                    {showCreateTeam && (
                        <div>
                            <CreateTeam closeModal={closeModal} />
                        </div>
                    )}
                    {showTeamMembers && (
                        <div>
                            <ViewTeamMembers closeModal={closeModal} />
                        </div>
                    )}
                    {showRequestJoin && (
                        <div>
                            <RequestToJoin closeModal={closeModal} />
                        </div>
                    )}
                </div>
            )}

            <div className="feed__content">
                <div className="feed__content__left">
                    <LeftNavBar openCreateTeam={createTeam} />
                </div>
                <div className="feed__content__center">
                    <CreatePost
                        openProject={uploadProject}
                        openIdea={uploadIdea}
                        openThought={uploadThought}
                    />
                    <div className="sort">
                        <div className="line-separation">
                            <hr className="line-separation-line" style={{}} />
                            <div
                                onMouseLeave={() => {
                                    setTimeout(() => {
                                        setShowFilter(false)
                                    }, 300)
                                }}
                            >
                                <span>
                                    Sort by:{' '}
                                    <label onClick={handleFilterShow}>
                                        {`${currentFilter}`}
                                        <span>
                                            {showFilter ? (
                                                <ExpandLessIcon />
                                            ) : (
                                                <ExpandMoreIcon />
                                            )}
                                        </span>
                                    </label>
                                </span>
                                {showFilter && (
                                    <SortByDropdown
                                        filterOptionSelector={
                                            filterOptionSelector
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="feed__content__center--container">
                        {filteredPosts.map((post, idx) => {
                            // console.log(post)
                            return (
                                <Post
                                    key={idx}
                                    post={post}
                                    openTeamMember={viewTeamMembers}
                                    openRequestJoin={viewRequestJoin}
                                />
                            )
                        })}
                        <Spinner />
                    </div>
                </div>
                <div className="feed__content__right">
                    <RightNavBar peopleToKnow={peopleToKnow} />
                </div>
            </div>
        </div>
    )
}

export default Feed
