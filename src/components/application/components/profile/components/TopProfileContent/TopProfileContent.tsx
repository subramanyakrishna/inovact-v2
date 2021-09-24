import React, {useEffect, useState} from 'react'
import profilepic from "../../../../../../images/connections/profilepic.png";
import projectsImg from '../../../../../../images/profile/Projects.png';
import ideasImg from "../../../../../../images/profile/Ideas.png";
import mentionsImg from "../../../../../../images/profile/mentions.png";
import thoughtImg from "../../../../../../images/profile/thought.png";
import aboutImg from "../../../../../../images/profile/about.png";

function TopProfileContent(props: any) {
    
    const showLeftContent = ()=>{
        if(window.innerWidth>800){
            return;
        }
        props.setShowLeft(true);
        props.setShowRight(false);
    }
    const removeLeftContent = () =>{
        if(window.innerWidth>800){
            return;
        }
        props.setShowLeft(false);
        props.setShowRight(true);
    }
    const [showOptions, setShowOptions] = useState(false);
    const toggleShowOptions = ()=>{
        setShowOptions(!showOptions);
    }
    const toggleShowOptionsSlow = ()=>{
        setTimeout(()=>toggleShowOptions(),1000);
    }

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
                {
                    props.showAbout &&
                    <div className="top-profile-post-buttons-about-btn" onClick={showLeftContent}>
                        <img src={aboutImg}/>
                        <span>About</span>
                    </div>
                }
                
                <div onClick={removeLeftContent}>
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
                <div className="top-profile-post-buttons-options">
                    <button onClick={toggleShowOptions}>&#8942;</button>
                    {
                        showOptions &&
                        <div className="top-profile-post-buttons-options-all" onMouseLeave={toggleShowOptionsSlow}>
                            <span onClick={props.showBlockUser}>Block Account</span>
                            <span onClick={props.showReportUser}>Report Account</span>
                            <span onClick={props.showRestrictUser}>Restrict Account</span>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default TopProfileContent;
