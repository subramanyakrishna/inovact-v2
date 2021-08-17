import React from 'react';
import avatar from '../../../../images/user-info/avatar.png';
import { MDBBtn ,MDBInput} from 'mdb-react-ui-kit';
type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const Upload = ({ prevStep,nextStep, handleChange, values }:AppProps) => {

  const Continue = (e: any) => {
    e.preventDefault();
    nextStep();
  }
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
            <div className="upload__form">
              <form>
                  <div className="upload__form__image">
                    <label htmlFor="image">
                    <img src={avatar} alt="" className="user-detail__form__img"  onClick={handleChange('image')} ></img>                    </label>
                     
                      <input  type="file" id="image" hidden/>
                  </div>
                  <div className="upload__form__bio">
                    <div className="upload__text">
                    <h6 className="heading-secondary">Add Bio To your Profile</h6>
                      <p className="paragraph-primary--green">A well written bio goes a long way in making a good impresssion</p>
                      <MDBInput label='Add your Bio'  id='typeText' type='text'onChange={handleChange('bio')} />
                    </div>

                     
                  </div>
              </form>
           
              <div className="buttons">
                <MDBBtn color='default' 
                                  onClick={ Previous } class="button button-white">Back</MDBBtn>
                  <MDBBtn color='success' 
                                  onClick={ Continue }  class="button button--green">Next</MDBBtn>
              </div>
             
             <div className="skip">
                    <a href="/feed" >Skip for now</a>
             </div>      
            </div>
          </section>
    </div>
</div>

  )
}

export default Upload;
