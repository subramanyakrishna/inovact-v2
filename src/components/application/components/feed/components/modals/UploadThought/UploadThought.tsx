import React from 'react'
import { handleAddThoughtChange } from 'StateUpdateHelper';

function UploadThought(props:any) {
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Thought</label>
                <div className="modal_part_one">
                    <div className="modal_part_one-description">
                        <label >Thought Description</label>
                        <textarea placeholder="What's on your mind?" onChange={(e: any)=>handleAddThoughtChange("description", e.target.value)}/>
                    </div>
                </div>
                <div className="modal_cover-post-btn">
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default UploadThought;
