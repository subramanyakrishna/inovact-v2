import React, {useState} from 'react';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

function NotificationTag(props: any) {
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOptionsMenu = ()=>{
        setShowOptions(!showOptions);
    }
    let timer;
    const removeOptionsSlow = ()=>{
        timer = setTimeout(()=>{
            setShowOptions(false);
        },500);
    }
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
            <div>
                <button className="notifications-tag-optionsbtn" onClick={toggleShowOptionsMenu}>&#8942;</button>
                {
                    showOptions && 
                    <div className="notifications-options" onMouseLeave={removeOptionsSlow}>
                        <div>
                            <span className="notifications-options-heading">Delete</span>
                            <span className="notifications-options-description">Delete this notification</span>
                        </div>
                        <div>
                            <span className="notifications-options-heading">Turn off</span>
                            <span className="notifications-options-description">Stop seeing {props.name}'s updates</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default NotificationTag;
