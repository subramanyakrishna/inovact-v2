import React, { useState } from 'react'
import avatar from 'images/feed/user-avatar.png'
import add from 'images/feed/add.svg'
import { useSelector } from 'react-redux';
import arrowUp from "../../../../../../images/feed/arrow-up.svg";
function CreatePost(props:any) {

    const [showPopUp, setShowPopUp] = useState(false);

    const togglePopUp = ()=>{
        setShowPopUp(!showPopUp);
    }

    const closePopUp = ()=>{
        setShowPopUp(false);
    }
    const userInfo = useSelector((state: any)=>state.userInfo);
    const goToTopFeed = ()=>{
        window.scrollTo(0,0);
        props.feedContainer?.current.scrollTo(0,0);
    }
    return (
        <>
            <div className="create-post">
                <div className="create-post__avatar">
                    <img src={userInfo.avatar} alt="Avatar" />
                </div>
                <div className="create-post__content">
                    <h1>What's on your mind, {userInfo.first_name}?</h1>
                    <div className="create-post__content__options">
                        <div className="create-post__content__options__button" onClick={props.openProject}>
                            New Project
                        </div>
                        <div className="create-post__content__options__button" onClick={props.openIdea}>
                            New Idea
                        </div>
                        <div className="create-post__content__options__button" onClick={props.openThought}>
                            New Thought
                        </div>
                    </div>
                </div>
            </div>
            <div className="floating-button">
                {
                    showPopUp &&
                    <div className="floating-button-popup">
                        <button onClick={()=>{
                            props.openProject();
                            setTimeout(closePopUp,500);
                            }} >New Project</button>
                        <button onClick={()=>{
                            props.openIdea();
                            setTimeout(closePopUp,500);
                            }}>New Idea</button>
                        <button onClick={()=>{
                            props.openThought();
                            setTimeout(closePopUp,500);
                            }}>New Thought</button>
                    </div>
                }
                <div className="floating-button-img-container" onClick={togglePopUp}>
                    <button className="gotop-button" onClick={goToTopFeed}><img src={arrowUp} alt="^"/></button>
                    <img src={add} alt="" onClick={togglePopUp} />
                </div>
                
            </div>
        </>
    )
}

export default CreatePost
