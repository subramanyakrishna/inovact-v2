import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import { imageUploader } from 'imageUpload/imageUploader'
import { useHistory } from 'react-router'

function ProfileImage({ handleUserInfoChange, userInfo }: any) {
    
    const loadFile = async (e: any) => {
        if(e.target.files){
            const data = await imageUploader(e.target.files)
            handleUserInfoChange('avatar', data[0].url)
        }
    }
    const history = useHistory();
    const changeCompleteProfile = (e: any)=>{
        e.preventDefault();
        history.push("/app/userinfo");
    }
    return (
        <div className="settings-my-profile-nametag">
            <input
                type="file"
                id="upload-media-input"
                hidden
                multiple
                onChange={loadFile}
            />
            <label
                htmlFor="upload-media-input"
                className={'settings-my-profile-nametag-imageAndEditContainer'}
            >
                <div className="settings-my-profile-nametag-img-container">
                    <img src={userInfo.avatar} alt="avatar" />
                </div>
                <div className="settings-my-profile-nametag-editcontainer">
                    {' '}
                    <button>
                        <EditIcon
                            fontSize="small"
                            style={{ color: 'white' }}
                        ></EditIcon>
                    </button>
                </div>
            </label>
            <div>
                <span className="settings-my-profile-nametag-name">
                    {userInfo.first_name + ' ' + userInfo.last_name}
                </span>
                <span className="settings-my-profile-nametag-email">
                    {userInfo.email_id}
                </span>
            </div>
            <div>
                <button className="edit-complete-profile" onClick={changeCompleteProfile}>Edit complete profile</button>
            </div>
        </div>
    )
}

export default ProfileImage
