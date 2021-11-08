import React, { useEffect, useState } from 'react'
import like from 'images/feed/post/like.svg'
import comment from 'images/feed/post/comment.svg'
import share from 'images/feed/post/share.svg'
import project_badge from 'images/feed/post/project_badge.svg'
import idea_badge from 'images/feed/post/idea_badge.svg'
import thoughts_badge from 'images/feed/post/thoughts_badge.svg'
import { Link } from 'react-router-dom'
import Photos from '../../feed/components/center/Photos'
import TeamTag from 'components/application/components/profile/components/LeftProfileContent/Components/TeamTag'
import UserTag from 'components/application/components/profile/components/RightProfileContent/UserTag'
import CommentsOnPost from 'components/application/components/profile/components/RightProfileContent/CommentsOnPost'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Post({ post, openTeamMember, openRequestJoin }: any) {
    const [showTeams, setShowTeams] = useState(true)
    const [showShareOption, setShowShareOption] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const backToPost = () => {
        setShowComments(false)
    }
    const teamsData = [
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Team Name',
            membersCount: 122,
        },
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Team Name',
            membersCount: 122,
        },
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Team Name',
            membersCount: 122,
        },
    ]
    const userTeams = useSelector((state: any) => state.teams.teams)
    const peopleYouMayKnow = useSelector((state: any) => state.peopleYouMayKnow)
    const usersData = [
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Jane Doe',
        },
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Jane Doe',
        },
        {
            img: 'https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg',
            name: 'Jane Doe',
        },
    ]
    const toggleShowTeams = () => {
        setShowTeams(true)
    }
    const toggleShowUsers = () => {
        setShowTeams(false)
    }
    const closeShareOptionSlow = () => {
        setTimeout(() => {
            setShowShareOption(false)
        }, 1000)
    }
    const sharePost = () => {
        setShowShareOption(!showShareOption)
    }
    const toggleShowComments = () => {
        setShowComments(!showComments)
    }
    console.log(post)
    const user_id = useSelector((state: any) => state.userInfo.id)
    console.log(post.numLikes)
    const [likes, setLikes] = useState(0)
    const [likedPost, setLikedPost] = useState(false)
    const likedImg =
        'https://svg-clipart.com/svg/heart/RgoENWE-white-heart-vector.svg'
    const likeThePost = async (postId: any) => {
        setLikedPost(true)
        setLikes(likes + 1)
        const route = `${
            post.type === 1 ? 'post' : post.type === 2 ? 'idea' : 'thought'
        }`
        await axios({
            method: 'POST',
            url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/${route}/like?${
                route === 'post' ? 'project' : route
            }_id=${postId}`,
            headers: {
                Authorization: localStorage.getItem('user'),
                'Content-Type': 'application/json',
            },
        })
            .then(() => {
                console.log('The like was a success')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        // console.log(post.likes);
        // console.log(post.likes.some((like: any)=>like.id!==user_id));
        console.log(post)
        setLikes(post.numLikes)
        if (post.likes?.some((like: any) => like.user.id === user_id)) {
            setLikedPost(true)
        }
    }, [post])
    console.log(user_id)
    console.log(post.user_id)
    return (
        <div className="post">
            {!showComments && (
                <div>
                    <div className="post__author">
                        <div className="post__author__info">
                            {user_id === post.user_id ? (
                                <Link to="/app/profile">
                                    <img
                                        className="post__author__avatar"
                                        src={post.avatar}
                                        alt=""
                                    />
                                </Link>
                            ) : (
                                <Link
                                    to="/app/otherprofile"
                                    onClick={() => {
                                        console.log(
                                            'post.user_id other-user',
                                            post.user_id
                                        )
                                        localStorage.setItem(
                                            'other-user',
                                            post.user_id
                                        )
                                    }}
                                >
                                    <img
                                        className="post__author__avatar"
                                        src={post.avatar}
                                        alt=""
                                    />
                                </Link>
                            )}

                            <div className="post__author__text">
                                <div className="post__author__text__name-container">
                                    <h1 className="post__author__text__name">
                                        {post.author}
                                    </h1>
                                    {user_id !== post.user_id && (
                                        <button className="connect-button">
                                            Connect
                                        </button>
                                    )}
                                </div>
                                <div className="post__author__text__bottom">
                                    <p className="post__author__text__time text-color--green text-size--small">
                                        {post.role &&
                                            post.role[0].toUpperCase() +
                                                post?.role.slice(1)}
                                    </p>
                                    {/* <p className="post__author__text__type text-color--green text-size--small">{post.type===1?"Project":post.type===2?"Idea":"Thought"}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="connect-button-container">
                            <p className="view-team-members">
                                View Team Members
                            </p>
                        </div>
                    </div>
                    <div className="post__text">
                        {post.title ? (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <h1 className="post__text__title">
                                    {post.title} {}
                                </h1>
                                {post.type === 1 ? (
                                    <img
                                        src={project_badge}
                                        alt=""
                                        width="25"
                                    />
                                ) : post.type === 2 ? (
                                    <img src={idea_badge} alt="" />
                                ) : (
                                    <img src={thoughts_badge} alt="" />
                                )}
                            </div>
                        ) : null}

                        <p className="post__text__desc">
                            {post.type === 1
                                ? post.description.substring(0, 150)
                                : post.description}{' '}
                        </p>
                    </div>
                    {post.tags ? (
                        <div className="post__tags">
                            {post.tags?.map((tag: string, idx: number) => {
                                return post.type === 1 ? (
                                    <p key={idx} className="post__tags__item">
                                        {tag}
                                    </p>
                                ) : (
                                    <p key={idx} className="post__tags__item">
                                        {tag}
                                    </p>
                                )
                            })}
                        </div>
                    ) : null}
                    {post.images ? (
                        <div className="post__images">
                            <Photos images={post.images} />
                        </div>
                    ) : null}
                </div>
            )}
            <div>
                {window.innerWidth < 768 && showComments && (
                    <CommentsOnPost backToPost={backToPost} />
                )}
            </div>
            <div className="post__footer">
                <div className="post__footer__likes">
                    <img
                        src={likedPost ? likedImg : like}
                        alt=""
                        onClick={() => {
                            if (!likedPost) {
                                likeThePost(post.id)
                            }
                        }}
                    />
                    <p className="post__footer__likes__num">{likes}</p>
                </div>
                <div
                    className="post__footer__comments"
                    onClick={(e) => {
                        if (window.innerWidth < 768) toggleShowComments()
                    }}
                >
                    <img src={comment} alt="" />
                    <p className="post__footer__comments__num">
                        {post.numComments}
                    </p>
                </div>
                <div className="post__footer__share">
                    {showShareOption && (
                        <div
                            className="post__footer__share_to"
                            onMouseLeave={closeShareOptionSlow}
                        >
                            <p className="post__footer__share_to-heading">
                                Share post to...
                            </p>
                            <div className="post__footer__share_to-separator">
                                <span
                                    style={{
                                        borderBottom: showTeams
                                            ? '5px solid #02bd63'
                                            : 'none',
                                        color: showTeams ? '#02bd63' : 'black',
                                    }}
                                    onClick={toggleShowTeams}
                                >
                                    Teams
                                </span>
                                <span
                                    style={{
                                        borderBottom: !showTeams
                                            ? '5px solid #02bd63'
                                            : 'none',
                                        color: !showTeams ? '#02bd63' : 'black',
                                    }}
                                    onClick={toggleShowUsers}
                                >
                                    Users
                                </span>
                            </div>
                            <div className="post__footer__share_to-teams-and-users">
                                {showTeams &&
                                    userTeams.map((team: any) => {
                                        return (
                                            <TeamTag
                                                img={team.avatar}
                                                teamName={team.name}
                                                membersCount={
                                                    team.team_members.length
                                                }
                                            />
                                        )
                                    })}
                                {!showTeams &&
                                    peopleYouMayKnow.map((user: any) => {
                                        return (
                                            <UserTag
                                                img={user.image}
                                                name={user.name}
                                            />
                                        )
                                    })}
                            </div>
                            <button className="post__footer__share_to-sharebtn">
                                Send
                            </button>
                        </div>
                    )}
                    <div
                        style={{
                            backgroundColor: showShareOption
                                ? '#385790'
                                : '#4b72bc',
                        }}
                        className="post__footer__share-img-container"
                        onClick={sharePost}
                    >
                        <img
                            src={share}
                            alt=""
                            className="post__footer__share-img"
                        />
                    </div>
                </div>
                {post.team && post.user_id !== user_id && post.type === 1 ? (
                    <>
                        <p
                            className="post__footer__team__request"
                            onClick={openRequestJoin}
                        >
                            Join Team
                        </p>
                    </>
                ) : (
                    <div className="post__footer__team__empty"></div>
                )}
            </div>
        </div>
    )
}

export default Post
