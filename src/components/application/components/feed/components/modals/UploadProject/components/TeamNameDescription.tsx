import React from 'react'

function TeamNameDescription() {
    return (
        <div className="modal_part_one-team-description">
            <div className="modal_part_one-title">
                <label >Project Title</label>
                <input type="text" placeholder="Give your project a suitable title"/>
            </div>
            <div className="modal_part_one-description">
                <label >Project Description</label>
                <textarea placeholder="Describe your project"/>
                <div>
                    <button>Upload Media</button>
                </div>
            </div>
        </div>
    )
}

export default TeamNameDescription;
