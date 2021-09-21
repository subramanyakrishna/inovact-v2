import React, { useState } from 'react';
import profilepic from "../../../../../../images/connections/profilepic.png";

function Post() {
    const [ showMore, setShowMore ] = useState(false);
    const toggleShowMore = ()=>{
        setShowMore(!showMore);
    }
    return (
        <div>
            <div>
                <div>
                    <img src={profilepic}/>
                    <div>
                        <span>Matt Lee</span>
                        <span>10 hrs ago</span>
                    </div>
                </div>
                <div>
                    <span>Project Title</span>
                    {
                        !showMore && 
                        <p>Project Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...<span onClick={toggleShowMore}>Read More</span></p>
                    }
                    {
                        showMore && 
                        <p>Project Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.<span onClick={toggleShowMore}>Read Less</span></p>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default Post;
