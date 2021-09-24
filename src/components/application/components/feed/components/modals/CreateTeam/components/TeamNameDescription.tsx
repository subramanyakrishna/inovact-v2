import React from 'react'

function TeamNameDescription() {
    return (
        <div className="team-name">
            <div className="team-name-title">
                <label >Team Title</label>
                <input type="text" placeholder="Give your project a suitable title"/>
            </div>
            <div className="team-name-description">
                <label >Team Description</label>
                <textarea placeholder="Describe your project"/>
            </div>
        </div>
    )
}

export default TeamNameDescription;
