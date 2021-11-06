import { useEffect, useState } from 'react'

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

    useEffect(() => {
        setState(props.notification)
        console.log(props.notification)
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
                        <div
                            onClickCapture={() =>
                                props.deleteNotisfication(state.id, state.type)
                            }
                        >
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
