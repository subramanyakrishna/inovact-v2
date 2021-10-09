import React from 'react';
import profilepic from "../../../../../../../images/connections/profilepic.png";
import EditIcon from "@material-ui/icons/Edit";


function ProfileImage() {
    // const userData = 
    return (
        <div className="settings-my-profile-nametag">
            <div className="settings-my-profile-nametag-img-container">
                <img src={profilepic}/>
                
            </div>
            <div className="settings-my-profile-nametag-editcontainer">
                    <button><EditIcon fontSize="small" style={{color: "white"}}/></button>
                </div>
            <div>
                <span className="settings-my-profile-nametag-name">Matt Lee</span>
                <span className="settings-my-profile-nametag-email">mattlee123@gmail.com</span>
            </div>
        </div>
    )
}

export default ProfileImage;
