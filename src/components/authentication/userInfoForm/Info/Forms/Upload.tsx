
import React, {useState} from 'react'
import {Field } from 'formik';
import avatar from 'images/user-info/avatar.png';
import {Link} from 'react-router-dom';
import configOptions from 'imageUpload/config';
import uploader from 'imageUpload/imageUploader';
import { useDispatch, useSelector } from 'react-redux';
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants';

export default function AreaOfInterest(props :any) {
    const {
      formField: {
         bio,
         image   
      }
    } = props;
    const [userBio, setUserBio] = useState("");
    const [imageURL, setImageURL] = useState(avatar);
    const dispatch = useDispatch();
    const state = useSelector((state: any)=>state.userInfo);
    const handleChangeBio = (e: any)=>{
      setUserBio(e.target.value);
      props.handleChange("bio",e.target.value);
    }
    const loadFile = (e: any)=>{
      console.log("here image upload")
      // const imageSource = URL.createObjectURL(e.target.files[0]);
      // console.log(imageSource);
      const imageData = new FormData();
      console.log(e.target.files[0]);
      imageData.append("file",e.target.files[0]);
      imageData.append("upload_preset", "inovact");
      imageData.append("cloud_name", "khalnayak069");
      fetch("https://api.cloudinary.com/v1_1/khalnayak069/image/upload",{
        method: "post",
        body: imageData
      }).then(response=>response.json()).then((data)=>{
          setImageURL(data.secure_url);
          dispatch({type: userInfoConstants.UPDATE_AVATAR, payload: data.secure_url});
          console.log(data);
        }
        ).catch((err)=>console.log(err));
    }
    return (
        <section className="upload">
          
        <div className="upload__text">
            <h6 className="heading-secondary">Upload your Profile Picture</h6>
            <p className="paragraph-primary--green">Your Profile Picture always assists in showcasing you in a better wayto your connection</p>
        </div>

        <form className="upload__form">

              <div className="upload__form__image">
                <label htmlFor="image">
                <img src={imageURL} alt="" className="user-detail__form__img" ></img></label>
                <input  type="file" id="image" hidden onChange={loadFile}/>
              </div>


              <div className="upload__form__bio">
                <div className="upload__text">
                 <h6 className="heading-secondary">Add Bio To your Profile</h6>
                  <p className="paragraph-primary--green">A well written bio goes a long way in making a good impresssion</p>
                    
                    <Field className="input-formComponent" as="textarea" onChange={handleChangeBio} name={bio.name} value={userBio}
                        placeholder='Write down a short summary about you and your interest' 
                      />
                </div>
              </div>
        </form>
          {/* <Link to="feed" className="skip">Skip for now</Link> */}
        
      </section>
    )
}

