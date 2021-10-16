import React from 'react'

function DeleteAccount(props: any) {
    return (
        <div className="settings-my-profile-delete-account">
            <button
                className={'privacy-settings-pswd-change-btn text-color--white'}
                onClick={() => props.saveDataToServer()}
            >
                Save Changes
            </button>
            <button
                className="settings-my-profile-delete-account-deleteBtn"
                onClick={props.deleteAccount}
            >
                Delete Account
            </button>
        </div>
    )
}

export default DeleteAccount
