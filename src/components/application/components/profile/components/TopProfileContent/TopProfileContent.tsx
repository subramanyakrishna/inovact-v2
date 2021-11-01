import React, {useEffect, useState} from 'react'
import profilepic from "../../../../../../images/connections/profilepic.png";
import projectsImg from '../../../../../../images/profile/Projects.png';
import ideasImg from "../../../../../../images/profile/Ideas.png";
import mentionsImg from "../../../../../../images/profile/mentions.png";
import thoughtImg from "../../../../../../images/profile/thought.png";
import aboutImg from "../../../../../../images/profile/about.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Spinner from 'components/application/Spinner';

function TopProfileContent(props: any) {
    
    const showLeftContent = ()=>{
        removeBorderAll();
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
    const [showProjects, setShowProjects] = useState(true);
    const [showIdeas, setShowIdeas] = useState(false);
    const [showThoughts, setShowThoughts] = useState(false);
    const toggleShowOptions = ()=>{
        setShowOptions(!showOptions);
    }
    const toggleShowOptionsSlow = ()=>{
        setTimeout(()=>toggleShowOptions(),1000);
    }
    const removeBorderAll = ()=>{
        setShowProjects(false);
        setShowIdeas(false);
        setShowThoughts(false);
        removeLeftContent();
    }
    const showProjectsOnly = ()=>{
        props.showProjectsOnly();
        removeBorderAll();
        setShowProjects(true);
    }
    const showIdeasOnly = ()=>{
        props.showIdeasOnly();
        removeBorderAll();
        setShowIdeas(true);
    }
    const showThoughtsOnly = ()=>{
        props.showThoughtsOnly();
        removeBorderAll();
        setShowThoughts(true);
    }
    return (
        <div className="top-profile-content">
            {
                props.userInfo.avatar ?
                <div className="top-profile-user-tag">
                    <div className="top-profile-user-img">
                        <img src={props.userInfo.avatar}  alt="User"/>
                    </div>
                    <div className="top-profile-user-data">
                        <span className="top-profile-user-data-name">{props.userInfo.first_name} {props.userInfo.last_name}</span>
                        <span className="top-profile-user-data-designation">{props.userInfo.designation}</span>
                        <span className="top-profile-user-data-university">{props.userInfo.university}</span>
                    </div>
                </div>:
                <Spinner/>
            }
            <div className="top-profile-post-buttons">
                {
                    props.showAbout &&
                    <div className="top-profile-post-buttons-about-btn" onClick={showLeftContent} style={{borderBottom: props.showLeft?"3px solid #02bd63":"none", cursor: "pointer"}}>
                        <PersonOutlineOutlinedIcon fontSize="medium"/>
                        <span>About</span>
                    </div>
                }
                
                <div onClick={showProjectsOnly} style={{borderBottom: showProjects?"3px solid #02bd63":"none", cursor: "pointer"}}>
                    <img src={projectsImg}/>
                    <span>Projects</span>
                </div>
                <div onClick={showIdeasOnly} style={{borderBottom: showIdeas?"3px solid #02bd63":"none", cursor: "pointer"}}>
                    <img src={ideasImg}/>
                    <span>Ideas</span>
                </div>
                <div onClick={showThoughtsOnly} style={{borderBottom: showThoughts?"3px solid #02bd63":"none", cursor: "pointer"}}>
                    <img src={thoughtImg}/>
                    <span>Thoughts</span>
                </div>
                <div>
                    <img src={mentionsImg}  alt="mention"/>
                    <span>Mentions</span>
                </div>
                {/* <div className="top-profile-post-buttons-options">
                    <button onClick={toggleShowOptions}>&#8942;</button>
                    {
                        showOptions &&
                        <div className="top-profile-post-buttons-options-all" onMouseLeave={toggleShowOptionsSlow}>
                            <span onClick={props.showBlockUser}>Block Account</span>
                            <span onClick={props.showReportUser}>Report Account</span>
                            <span onClick={props.showRestrictUser}>Restrict Account</span>
                        </div>
                    }
                    
                </div> */}
            </div>
        </div>
    )
}

export default TopProfileContent;
