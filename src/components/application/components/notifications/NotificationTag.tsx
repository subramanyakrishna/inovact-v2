import React, {useState} from 'react';

function NotificationTag(props: any) {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div className="notifications-tag">
            <div className="notifications-tag-img-container">
                <img src={props.img}/>
            </div>
            <p className="notifications-tag-comment">
                <b>{props.name} </b> 
                {props.comment}
            </p>
            <p className="notifications-tag-time">{props.time}</p>
            <button className="notifications-tag-optionsbtn">&#8942;</button>
            {
                showOptions && 
                <div>
                    <div>
                        <span>Delete</span>
                        <span>Delete this notification</span>
                    </div>
                    <div>
                        <span>Turn off</span>
                        <span>Stop seeing {props.name}'s updates</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default NotificationTag;
