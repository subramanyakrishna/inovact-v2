import React from 'react'

function EditBio(props: any) {
    return (
        <div className="edit-bio-modal">
            <div className="edit-bio-heading">
                <p className="edit-bio-heading-title">Bio</p>
                <button className="edit-bio-heading-exitbtn" onClick={props.closeModal}>&times;</button>
            </div>
            <textarea className="edit-bio-content" placeholder="Enter the new bio..."/>
            <input type="text" className="edit-bio-email" placeholder="Enter Email"/>
            <input type="text" className="edit-bio-website" placeholder="Enter Website"/>
            <div>
                <button className="edit-bio-editbtn">Edit</button>
            </div>
        </div>
    )
}

export default EditBio;
