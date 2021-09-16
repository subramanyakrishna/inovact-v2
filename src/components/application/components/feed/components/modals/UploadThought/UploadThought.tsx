import React from 'react'

function UploadThought(props:any) {
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Thought</label>
                <div className="modal_part_one">
                    <div className="modal_part_one-description">
                        <label >Project Description</label>
                        <textarea placeholder="Describe your project"/>
                        <div>
                            <input type="file" id="upload-media-input" hidden/>
                            <label className="upload-media-btn" htmlFor="upload-media-input">Upload Media</label>
                        </div>
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
