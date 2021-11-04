import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { findTimeDiffString } from '../connections/components/connectionsUtils'

function NotificationTag(props: any) {
    const [showOptions, setShowOptions] = useState(false)
    const [state, setState] = useState<any>({})
    const toggleShowOptionsMenu = () => {
        setShowOptions(!showOptions)
    }
    const removeOptionsSlow = () => {
        setTimeout(() => {
            setShowOptions(false)
        }, 500)
    }

    const mapApiNotisficationDataToUiData = (
        notisficationFromApi: any,
        notisfiation_type: string,
        Link: any
    ) => {
        switch (notisfiation_type) {
            case 'connectionsByUser2': {
                return {
                    id: notisficationFromApi.user1,
                    img: notisficationFromApi.user.avatar,
                    type: 'connectionsByUser2',
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>
                                {notisficationFromApi.user.first_name +
                                    ' ' +
                                    notisficationFromApi.user.last_name}
                            </b>{' '}
                            want to connect with you
                        </p>
                    ),
                    time: findTimeDiffString(notisficationFromApi.created_at),
                }
            }
            case 'ideas':
                return {
                    id: notisficationFromApi.id,
                    img: notisficationFromApi.idea_likes[0].user.avatar,
                    type: 'ideas',
                    isCurrUserNotisfication: false,
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>
                                {notisficationFromApi.idea_likes[0].user
                                    .first_name +
                                    ' ' +
                                    notisficationFromApi.idea_likes[0].user
                                        .last_name}
                            </b>{' '}
                            {notisficationFromApi.idea_likes.length > 1 &&
                                `other ${notisficationFromApi.idea_likes.length}`}
                            liked the idea{' '}
                            <Link
                                to={`/ideas/${notisficationFromApi.id}`}
                                style={{ color: '#4F4F4F' }}
                            >
                                <b>{notisficationFromApi.title}</b>
                            </Link>
                        </p>
                    ),
                    time: findTimeDiffString(
                        notisficationFromApi.idea_likes[0].liked_at
                    ),
                }
            case 'thoughts':
                return {
                    id: notisficationFromApi.id,
                    img: notisficationFromApi.thought_likes[0].user.avatar,
                    type: 'thoughts',
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>
                                {notisficationFromApi.thought_likes[0].user
                                    .first_name +
                                    ' ' +
                                    notisficationFromApi.thought_likes[0].user
                                        .last_name}
                            </b>{' '}
                            {notisficationFromApi.thought_likes.length > 1 &&
                                `other ${notisficationFromApi.thought_likes.length}`}
                            liked the thought{' '}
                            <Link
                                to={`/ideas/${notisficationFromApi.id}`}
                                style={{ color: '#4F4F4F' }}
                            >
                                <b>{notisficationFromApi.title}</b>
                            </Link>
                        </p>
                    ),
                    time: 'yes to be added',
                }
            case 'projects': {
                return {
                    id: notisficationFromApi.id,
                    img: notisficationFromApi.project_likes[0].user.avatar,
                    type: 'projects',
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>
                                {notisficationFromApi.project_likes[0].user
                                    .first_name +
                                    ' ' +
                                    notisficationFromApi.project_likes[0].user
                                        .last_name}
                            </b>{' '}
                            {notisficationFromApi.project_likes.length > 1 &&
                                `other ${notisficationFromApi.project_likes.length}`}
                            liked the project{' '}
                            <Link
                                to={`/posts/${notisficationFromApi.id}`}
                                style={{ color: '#4F4F4F' }}
                            >
                                <b>{notisficationFromApi.title}</b>
                            </Link>
                        </p>
                    ),
                    time: findTimeDiffString(
                        notisficationFromApi.project_likes[0].liked_at
                    ),
                }
            }
            case 'team_invitations': {
                return {
                    id: notisficationFromApi.team.id,
                    img: notisficationFromApi.team.team_members[0].user.avatar,
                    type: 'team_invitations',
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>
                                {notisficationFromApi.team.team_members[0].user
                                    .first_name +
                                    ' ' +
                                    notisficationFromApi.team.team_members[0]
                                        .user.last_name}
                            </b>{' '}
                            invited you to team{' '}
                            <b>{notisficationFromApi.team.name}</b>
                        </p>
                    ),
                    time: findTimeDiffString(notisficationFromApi.invited_at),
                }
            }
        }
    }
    useEffect(() => {
        const uiMappedNotisficationData = mapApiNotisficationDataToUiData(
            props.notisfication,
            props.notisfication_type,
            Link
        )
        setState(uiMappedNotisficationData)
    }, [])

    return (
        <div className="notifications-tag">
            <div className="notifications-tag-img-container">
                <img src={state.img} alt="" />
            </div>
            {state.comment}
            <p className="notifications-tag-time">{state.time}</p>
            <div>
                <button
                    className="notifications-tag-optionsbtn"
                    onClick={() => toggleShowOptionsMenu()}
                >
                    &#8942;
                </button>
                {showOptions && (
                    <div
                        className="notifications-options"
                        onMouseLeave={() => removeOptionsSlow()}
                    >
                        <div>
                            <span className="notifications-options-heading">
                                Delete
                            </span>
                            <span className="notifications-options-description">
                                Delete this notification
                            </span>
                        </div>
                        <div>
                            <span className="notifications-options-heading">
                                Turn off
                            </span>
                            <span className="notifications-options-description">
                                Stop seeing {props.type}'s updates
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NotificationTag
