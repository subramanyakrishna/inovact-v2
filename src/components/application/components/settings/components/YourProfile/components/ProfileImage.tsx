import React, { useState } from 'react'
import profilepic from '../../../../../../../images/connections/profilepic.png'
import EditIcon from '@material-ui/icons/Edit'
import { useDispatch } from 'react-redux'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'

function ProfileImage({ handleUserInfoChange, userInfo }: any) {
    const [imageUrl, setImageURL] = useState('')
    const dispatch = useDispatch()

    const loadFile = (e: any) => {
        console.log('here image upload')
        // const imageSource = URL.createObjectURL(e.target.files[0]);
        // console.log(imageSource);
        const imageData = new FormData()
        console.log(e.target.files[0])
        imageData.append('file', e.target.files[0])
        imageData.append('upload_preset', 'inovact')
        imageData.append('cloud_name', 'khalnayak069')
        fetch('https://api.cloudinary.com/v1_1/khalnayak069/image/upload', {
            method: 'post',
            body: imageData,
        })
            .then((response) => response.json())
            .then((data) => {
                setImageURL(data.secure_url)
                dispatch({
                    type: userInfoConstants.UPDATE_AVATAR,
                    payload: data.secure_url,
                })
                console.log(data)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="settings-my-profile-nametag">
            <div className="settings-my-profile-nametag-img-container">
                <img src={userInfo.avatar} />
            </div>
            <div className="settings-my-profile-nametag-editcontainer">
                <button>
                    <EditIcon
                        fontSize="small"
                        style={{ color: 'white' }}
                    ></EditIcon>
                </button>
            </div>
            <div>
                <span className="settings-my-profile-nametag-name">
                    {userInfo.first_name + ' ' + userInfo.last_name}
                </span>
                <span className="settings-my-profile-nametag-email">
                    {userInfo.email_id}
                </span>
            </div>
        </div>
    )
}

export default ProfileImage
