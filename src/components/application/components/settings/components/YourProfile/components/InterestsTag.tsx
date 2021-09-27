import React from 'react';
import remove from "../../../../../../../images/profile/skillremove.svg";

function InterestsTag(props: any) {
    return (
        <div className="settings-my-profile-area-of-interests-skills">
            <span >{props.interest}</span>
            <button>&#8213;</button>
        </div>
    )
}

export default InterestsTag;
