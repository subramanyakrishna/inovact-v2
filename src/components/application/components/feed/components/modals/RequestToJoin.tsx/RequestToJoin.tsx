import React from 'react'

function RequestToJoin(props: any) {
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Request to join Jane's Team</label>
                <div className="modal_content">
                    <div className="modal_cover-post-btn">
                        <button>Send Request</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RequestToJoin;
