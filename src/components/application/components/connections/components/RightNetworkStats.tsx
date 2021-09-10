import React from 'react';

import profilepic from "../../../../../images/connections/profilepic.png";

function RightNetworkStats () {
    return(
        <div className="right-network-stats">
            <div className="right-network-stats--img-container">
                <img src={profilepic} className="right-network-stats--img"/>
                <span>Matt Lee</span>
                <h5>Your Network Stats</h5>
            </div>
            <div className="right-network-stats--content">
                <div className="right-network-stats--content-titles">
                    <p>Total connections</p>
                    <p>Last week's connections</p>
                    <p>Your mentors</p>
                    <p>Appearances in People you may know</p>
                    <p>Percentage Growth</p>
                </div>
                <div className="right-network-stats--content-data">
                    <p>473</p>
                    <p>18</p>
                    <p>4</p>
                    <p>26</p>
                    <p style={{color: '#07d400'}}>+3.95%</p>
                </div>
            </div>
        </div>
    )
}


export default RightNetworkStats;