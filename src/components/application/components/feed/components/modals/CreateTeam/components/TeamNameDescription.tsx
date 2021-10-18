import React from 'react'
import { useSelector } from 'react-redux';
import { handleAddTeamChange } from 'StateUpdateHelper';

function TeamNameDescription() {
    
    return (
        <div className="team-name">
            <div className="team-name-title">
                <label >Team Title</label>
                <input type="text" placeholder="Give your project a suitable title" onChange={(e: any)=>handleAddTeamChange("name", e.target.value)}/>
            </div>
             <div>
                    <input type="file" id="upload-media-input" hidden />
                    <label className="upload-media-btn" htmlFor="upload-media-input">Upload Media</label>
                </div>
        </div>
    )
}

export default TeamNameDescription;
