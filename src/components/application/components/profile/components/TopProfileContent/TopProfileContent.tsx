import React from 'react'
import profilepic from "../../../../../../images/connections/profilepic.png";
import projectsImg from '../../../../../../images/profile/Projects.png';
import ideasImg from "../../../../../../images/profile/Ideas.png";
import mentionsImg from "../../../../../../images/profile/mentions.png";
import thoughtImg from "../../../../../../images/profile/thought.png";

function TopProfileContent() {
    return (
        <div className="top-profile-content">
            <div className="top-profile-user-tag">
                <img src={profilepic} className="top-profile-user-img"/>
                <div className="top-profile-user-data">
                    <span className="top-profile-user-data-name">Matt Lee</span>
                    <span className="top-profile-user-data-designation">Designation</span>
                    <span className="top-profile-user-data-university">XYZ University of Technology</span>
                </div>
            </div>
            <div className="top-profile-post-buttons">
                <div>
                    <img src={projectsImg}/>
                    <span>Projects</span>
                </div>
                <div>
                    <img src={ideasImg}/>
                    <span>Ideas</span>
                </div>
                <div>
                    <img src={thoughtImg}/>
                    <span>Thoughts</span>
                </div>
                <div>
                    <img src={mentionsImg}/>
                    <span>Mentions</span>
                </div>
                <div>
                    <button>...</button>
                </div>
            </div>
        </div>
    )
}

export default TopProfileContent;
