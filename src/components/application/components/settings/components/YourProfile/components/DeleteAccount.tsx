import React from 'react'

function DeleteAccount(props: any) {
    return (
        <div className="settings-my-profile-delete-account">
            <button onClick={props.deleteAccount}>Delete Account</button>
        </div>
    )
}

export default DeleteAccount;
