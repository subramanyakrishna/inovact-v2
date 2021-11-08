import React from 'react'
import { useSelector } from 'react-redux'
import { handleUserInfoChange } from 'StateUpdateHelper'
import useRequests from 'useRequest/useRequest'

function EditBio(props: any) {
    const userInfo = useSelector((state: any) => state.userInfo)
    const { doRequest, errors } = useRequests({
        route: 'user',
        method: 'put',
        body: {
            ...userInfo,
        },
        onSuccess: (data: any) => {},
    })
    const updateBio = () => {
        props.closeModal()
        doRequest()
    }
    return (
        <div className="edit-bio-modal">
            <div className="edit-bio-heading">
                <p className="edit-bio-heading-title">Bio</p>
                <button
                    className="edit-bio-heading-exitbtn"
                    onClick={props.closeModal}
                >
                    &times;
                </button>
            </div>
            <textarea
                className="edit-bio-content"
                placeholder="Enter the new bio..."
                onChange={(e: any) =>
                    handleUserInfoChange('bio', e.target.value)
                }
            />
            <input
                type="text"
                className="edit-bio-website"
                placeholder="Enter Portfolio Website"
                onChange={(e) => {
                    handleUserInfoChange('website', e.target.value)
                }}
            />
            <div>
                <button className="edit-bio-editbtn" onClick={updateBio}>
                    Edit
                </button>
            </div>
        </div>
    )
}

export default EditBio
