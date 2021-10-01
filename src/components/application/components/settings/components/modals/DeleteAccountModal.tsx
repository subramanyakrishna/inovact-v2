import React,{useState} from 'react'

function DeleteAccountModal(props: any) {
    const [deleteAssurance, setDeleteAssurace] = useState(false);
    const viewDeleteOptions = ()=>{
        setDeleteAssurace(true);
    }
    return (
        <div className="settings-modal-main">
            <div className="settings-modal-cover">
                <div className="settings-modal-content">
                    {
                        !deleteAssurance &&
                        <div>
                            <p className="settings-modal-cover-title">Are you sure you want to delete your account?</p>
                            <p style={{color: "red", fontWeight: 600}}>Note: This action cannot be undone.</p>
                            <div className="settings-modal-cover-buttons">
                                <button onClick={viewDeleteOptions} className="settings-modal-cover-buttons-signout" >Yes</button>
                                <button onClick={props.closeModal}className="settings-modal-cover-buttons-cancel">Cancel</button>
                            </div>
                        </div>
                    }
                    {
                        deleteAssurance &&
                        <div>
                            <p className="settings-modal-cover-title">Please enter your details below.</p>
                            <p style={{color: "red", fontWeight: 600}}>Note: This action cannot be undone.</p>
                            <div className="settings-modal-cover-inputfields">
                                <input type="text" placeholder="Enter your email id."/>
                                <input type="text" placeholder="Enter your password."/>
                            </div>
                            <div className="settings-modal-cover-buttons">
                                <button onClick={props.closeModal} className="settings-modal-cover-buttons-signout">Confirm</button>
                                <button onClick={props.closeModal}className="settings-modal-cover-buttons-cancel">Cancel</button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DeleteAccountModal;
