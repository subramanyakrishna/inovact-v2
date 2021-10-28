import React, { useEffect, useRef, useState } from 'react'
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
    handleAllThoughts,
    handleAllUserIdeas,
    handleAllUserProject,
    handlePeopleYouMayKnow,
    handleRolesChange,
    handleSkillsChange,
    handleTagsChange,
    handleUserInfoChange,
} from '../../../../StateUpdateHelper'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SmallSpinner from 'components/application/SmallSpinner'
import { useDispatch } from 'react-redux'
import { getTeams } from 'redux/actions/teams';
import arrowUp from "../../../../images/feed/arrow-up.svg"
import { useObservable } from 'rxjs-hooks'

function Feed() {
    //userPool.getCurrentUser(); console log to see the idtoken
    const [posts, setPosts] = useState<postData[]>([])
    const [ideas, setIdeas] = useState<postData[]>([])
    const [peopleToKnow, setPeopleToKnow] = useState<any>([])
    const [thoughts, setThoughts] = useState<postData[]>([])
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
    const allThoughts = useSelector((state: any)=> state.allThoughts);
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
            handleUserInfoChange("update_complete_user",data.data.user[0]);
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
                    user_name: ele.user_name,
                    image: ele.avatar,
                    duration: '10 min',
                    designation: ele.designation ? ele.designation : 'Student',
                })).filter((ele: any)=>{
                    // console.log(ele.user_id, userInfo.id);
                    return ele.user_id!==userInfo.id});
                // console.log(ptk);
                handlePeopleYouMayKnow("pymk_update_all",ptk);
                setPeopleToKnow([...ptk.slice(0, 4)]);
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
                    return image.url;
                }),
                time: convertDate(post.created_at),
                created_at: post.created_at,
                numLikes: 0,
                numComments: 0,
                }))]);
        }
    });
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
                    // console.log(image.url);
                    return image.url;
                }),
                time: convertDate(post.created_at),
                created_at: post.created_at,
                numLikes: 0,
                numComments: 0,
                }))]);
        }
    });
    const {doRequest: getAllThoughts, errors: allThoughtsErrors} = useRequests({
        method: "get",
        route: "thoughts",
        body: null,
        onSuccess: (data: any)=>{
            console.log("The thoughts fetched are: ",data.data.thoughts);
            const finalData = data.data.thoughts.map((thought: any)=>{
                return {
                    user_id: thought.user.id,
                    id: thought.id,
                    type: 3,
                    avatar: thought.user.avatar,
                    author: thought.user.first_name+" "+thought.user.last_name,
                    time: convertDate(thought.created_at),
                    created_at: thought.created_at,
                    description: thought.thought,
                    numLikes: 0,
                    numComments: 0,
                }
            });
            setThoughts([...finalData]);
            handleAllThoughts("all-thoughts",finalData);
        }
    });
    const {doRequest: getAllTags, errors: tagErrors} = useRequests({
        route: "token/tags",
        method: "get",
        body: null,
        onSuccess: (data: any)=>{
            console.log(data);
            handleTagsChange("udpate_all_tags", data.data.hashtag);
        }
    })
    const {doRequest: getAllSkills, errors: skillsErrors} = useRequests({
        route: "token/skills",
        method: "get",
        body: null,
        onSuccess: (data: any)=>{
            console.log(data);
            handleSkillsChange("udpate_all_skills", data.data.skills);
        }
    })
    const {doRequest: getAllRoles, errors: rolesErrors} = useRequests({
        route: "token/roles",
        method: "get",
        body: null,
        onSuccess: (data: any)=>{
            console.log(data);
            handleRolesChange("udpate_all_roles", data.data.roles);
        }
    })
    useEffect(()=>{
        (async ()=>{
            if(userInfo.avatar===""){
                await userGet();
            }
            await doRequest();
            await doRequestIdea();
            await getAllThoughts();
            await getPeopleToKnow();
            await getAllTags();
            await getAllSkills();
            await getAllRoles();
            // await getUserIdeas();
            // await getUserProjects();
            if(errors || errorsIdea || getPeopleErrors || userErrors){
                console.log(errors);
                console.log(errorsIdea);
                console.log(getPeopleErrors);
                console.log(userErrors);
                history.push("/login");
            }
        })();
        console.log("The userProfile status: ", userInfo.profile_complete);
    }, [])
    useEffect(() => {
        if (!userInfo.profile_complete) {
            history.push('/app/userinfo')
        }
    },[])
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
        const sortedPosts = [...posts,...ideas,...thoughts].sort((post1: any,post2: any)=>{
            const post1Date: any = new Date(post1.created_at);
            const post2Date: any = new Date(post2.created_at);
            return post2Date.getTime()-post1Date.getTime();
        });

        console.log("sorted based on date",sortedPosts);
        if (posts.length && ideas.length) {
            setFilteredPosts([...sortedPosts]);
        }
    }, [posts, ideas, thoughts])
    const filterOptionSelector = (type: string) => {
        setCurrentFilter(type)
        if (type === 'All') {
            setFilteredPosts([...posts, ...ideas, ...thoughts]);
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
        handleAddThoughtChange('thought_clear_data', '')
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
    }, []);
    const feedContainer: any = useRef();
    const goToTopFeed = ()=>{
        window.scrollTo(0,0);
        feedContainer?.current.scrollTo(0,0);
    }
    // const watchScroll = () =>
    // of(typeof window === 'undefined').pipe(
    //     filter((bool) => !bool),
    //     switchMap(() => fromEvent(window, 'scroll', { passive: true })),
    //     throttleTime(0, animationFrameScheduler),
    //     map(() => window.pageYOffset),
    //     pairwise(),
    //     map(([previous, current]) => (current < previous ? 'Up' : 'Down')),
    //     distinctUntilChanged()
    // )
    // const scrollDirection = useObservable(watchScroll, 'Down');
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
                    <div className="feed__content__center--container" ref={feedContainer}>
                        {
                            // scrollDirection === "Up" && 
                            <button className="gotop-button" onClick={goToTopFeed}><img src={arrowUp} alt="^"/></button>
                        }
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
                        <div className="content-well"></div>
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
