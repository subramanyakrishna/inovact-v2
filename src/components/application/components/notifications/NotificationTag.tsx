import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        notisfiation_type: string
    ) => {
        switch (notisfiation_type) {
            case 'connectionsByUser2': {
                return {
                    id: notisficationFromApi.user1,
                    img: 'yet to be added',
                    type: 'connectionsByUser2',
                    comment: (
                        <p className="notifications-tag-comment">
                            <b>{notisficationFromApi.user1}</b> want to connect
                            with you
                        </p>
                    ),
                    time: 'yes to be added',
                }
            }
            case 'ideas':
                return {
                    id: -1,
                    img: 'yet to be added',
                    type: 'ideas',
                    comment: (
                        <p className="notifications-tag-comment">
                            Yet to be added ideas
                        </p>
                    ),
                    time: 'yes to be added',
                }
            case 'thoughts':
                return {
                    id: -1,
                    img: 'yet to be added',
                    type: 'thoughts',
                    comment: (
                        <p className="notifications-tag-comment">
                            Yet to be added thoughts
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
                            liked the project{' '}
                            <Link to={`/posts/${notisficationFromApi.id}`}>
                                <b>{notisficationFromApi.title}</b>
                            </Link>
                        </p>
                    ),
                    time: 'yes to be added',
                }
            }
            case 'team_invitations': {
                return {
                    id: notisficationFromApi.team.id,
                    img: 'yet to be added',
                    type: 'team_invitations',
                    comment: (
                        <p className="notifications-tag-comment">
                            you are invited to team{' '}
                            <b>{notisficationFromApi.team.name}</b>
                        </p>
                    ),
                    time: 'yes to be added',
                }
            }
        }
        console.log(notisfiation_type, notisficationFromApi)
        return notisficationFromApi
    }
    useEffect(() => {
        const uiMappedNotisficationData = mapApiNotisficationDataToUiData(
            props.notisfication,
            props.notisfication_type
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
                        onMouseLeave={removeOptionsSlow}
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
