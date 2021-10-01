import React from 'react'
import InterestsTag from './InterestsTag';

function AreasOfInterests() {
    const interestData = [
        "Java",
        "API",
        "Java",
        "Problem Solving",
        "OOP Concepts",
        "Problem Solving",
        "API",
        "AOI 1",
        "Problem Solving",
        "API",
        "OOP Concepts",
        "API",
        "API",
        "AOI 1",
        "Problem Solving",
        "API",
        "OOP Concepts",
        "API",
        "API"
    ];
    return (
        <div className="settings-my-profile-area-of-interests">
            <span className="settings-my-profile-area-of-interests-heading">Areas of Interests</span>
            <div className="settings-my-profile-area-of-interests-allskills">
                {interestData.map((interest: any)=>{
                    return <InterestsTag interest={interest}/>;
                })}
            </div>
        </div>
    )
}

export default AreasOfInterests;
