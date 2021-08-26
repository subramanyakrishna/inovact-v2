import React from 'react';
import Form from 'components/userInfoForm/components/userDetails/Form';

type AppProps = {
   setFormStep:any,
    values:any,
   handleChange:any,
};

const UserDetails = ({ setFormStep, handleChange, values }:AppProps) => {

  const Continue = (e: any) => {
    e.preventDefault();
    setFormStep(3);
  }
  const Previous = (e:any) => {
    e.preventDefault();
    setFormStep(1);
  }

  return (

    <div className="user-info">
      <div className="user-info__card">
         <section className="user-details">
            <div className="user-details__text">
                <h6 className="heading-secondary">Let Us Know More About You</h6>
                <p className="paragraph-primary--red">*Mandatory fields</p>
            </div>
            <div className="user-details__form">
              <Form prevStep={1} nextStep={3} handleChange={handleChange} values={values} />
            </div>
            <div className="buttons">
                  <button
                    onClick={ Previous } 
                    className="button button--white">Back</button>
                    <button 
                        onClick={ Continue } 
                        className="button button--green">Next</button>
                </div>
        </section>
    </div>
</div>)}

export default UserDetails;
