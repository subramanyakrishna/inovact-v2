import React from 'react'

function LogOutModal(props: any) {
    return (
        <div className="settings-modal-main">
            <div className="settings-modal-cover">
                {/* <button className="close-modal" onClick={props.closeModal}>&times;</button> */}
                <div className="settings-modal-content">
                    <p className="settings-modal-cover-title">
                        Are you sure you want to sign out?
                    </p>
                    <div className="settings-modal-cover-buttons">
                        <button
                            onClick={props.logOutyes}
                            className="settings-modal-cover-buttons-signout"
                        >
                            Sign Out
                        </button>
                        <button
                            onClick={props.closeModal}
                            className="settings-modal-cover-buttons-cancel"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogOutModal
