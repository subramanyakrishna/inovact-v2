import React from 'react';
import avatar from '../../../../images/user-info/avatar.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const Upload = ({ prevStep,nextStep, handleChange, values }:AppProps) => {

 
  const Previous = (e:any) => {
    e.preventDefault();
    prevStep(4);
  }

  return (

    <div className="user-info">
      <div className="user-info__card">
         <section className="upload">
          
            <div className="upload__text">
                <h6 className="heading-secondary">Upload your Profile Picture</h6>
                <p className="paragraph-primary--green">Your Profile Picture always assists in showcasing you in a better wayto your connection</p>
            </div>

            <form className="upload__form">
                  <div className="upload__form__image">
                    <label htmlFor="image">
                    <img src={avatar} alt="" className="user-detail__form__img"  onClick={handleChange('image')} ></img>                    </label>
                    <input  type="file" id="image" hidden/>
                  </div>


                  <div className="upload__form__bio">
                    <div className="upload__text">
                     <h6 className="heading-secondary">Add Bio To your Profile</h6>
                      <p className="paragraph-primary--green">A well written bio goes a long way in making a good impresssion</p>
                        
                        <textarea
         placeholder='Write down a short summary about you and your interest' 
         onChange={handleChange('bio')}
          rows={3}

        />
                    </div>
                  </div>
            </form>

            <div className="buttons">
                <MDBBtn color='default' 
                                  onClick={ Previous } className="button button__white">Back</MDBBtn>
                  <a href="/feed"
                                    className="button button__green">Next</a>
              </div>
             
                    <Link to="feed" className="skip">Skip for now</Link>
            
          </section>
    </div>
</div>

  )
}

export default Upload;
