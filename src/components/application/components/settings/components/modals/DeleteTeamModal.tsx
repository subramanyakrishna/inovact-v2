import React from 'react'

function DeleteTeamModal(props: any) {
    return (
        <div className="settings-modal-main">
            <div className="settings-modal-cover">
                <div className="settings-modal-content">
                    <p className="settings-modal-cover-title">Are you sure you want to delete the team?</p>
                    <div className="settings-modal-cover-buttons">
                        <button onClick={props.closeModal} className="settings-modal-cover-buttons-signout" >Yes</button>
                        <button onClick={props.closeModal}className="settings-modal-cover-buttons-cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteTeamModal;
