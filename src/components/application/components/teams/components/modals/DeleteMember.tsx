import React from 'react'

function DeleteMember(props: any) {
    return (
        <div className="modal_main">
            <div className="modal_cover-delete">
                <p className="text-style--bold text-size--big text-align--center">
                    Are you sure you want to delete Jane Doe ?
                </p>
                <div className="delete-member-buttons">
                    <button className="delete-member-btn-accept">Yes</button>
                    <button
                        className="delete-member-btn-cancel"
                        onClick={props.closeModal}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeleteMember
