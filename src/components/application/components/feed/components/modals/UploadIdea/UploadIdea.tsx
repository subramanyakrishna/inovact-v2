import React from 'react'
import ModalContent from './components/ModalContent';

function UploadIdea(props:any) {
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Upload Idea</label>
                <ModalContent/>
                <div className="modal_cover-post-btn">
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default UploadIdea;
