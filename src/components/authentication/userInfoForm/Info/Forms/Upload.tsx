
import React from 'react'
import {Field } from 'formik';
import avatar from 'images/user-info/avatar.png';
import {Link} from 'react-router-dom';

export default function AreaOfInterest(props :any) {
    const {
      formField: {
         bio,
         image   
      }
    } = props;

    return (
        <section className="upload">
          
        <div className="upload__text">
            <h6 className="heading-secondary">Upload your Profile Picture</h6>
            <p className="paragraph-primary--green">Your Profile Picture always assists in showcasing you in a better wayto your connection</p>
        </div>

        <form className="upload__form">

              <div className="upload__form__image">
                <label htmlFor="image">
                <img src={avatar} alt="" className="user-detail__form__img"   ></img>                    </label>
                <input  type="file" id="image" hidden/>
              </div>


              <div className="upload__form__bio">
                <div className="upload__text">
                 <h6 className="heading-secondary">Add Bio To your Profile</h6>
                  <p className="paragraph-primary--green">A well written bio goes a long way in making a good impresssion</p>
                    
                    <Field className="input-formComponent" name={bio.name}
                        placeholder='Write down a short summary about you and your interest' 
                      
                        rows={3}
                      />
                </div>
              </div>
        </form>
          <Link to="feed" className="skip">Skip for now</Link>
        
      </section>
    )
}

