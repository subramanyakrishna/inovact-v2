import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
type AppProps = {
   setFormStep:any,
    handleChange: any,
    values:any,
  
};
const Mentor = ({ 
  setFormStep,
   handleChange, 
   values }:AppProps) => {

  const Continue = (e: any) => {
    e.preventDefault();
    setFormStep(4);
  }
  const Previous = (e:any) => {
    e.preventDefault();
    setFormStep(2);
  }

  return (

    <div className="user-info">
      <div className="user-info__card">
         <section className="student-info">

            <div className="student-info__text">
            <h6 className="heading-secondary">Let Us Know More About You</h6>
                <p className="paragraph-primary--red">*Mandatory fields</p>
            </div>

            <div className="student-info__form">
              <form>
              <MDBRow>
                <MDBCol md='12'>
                      <div className="form-group">
                      <label htmlFor="McurrDesignation">Current Designation <span className="paragraph-primary--red">*</span></label>
                      <input type="text" name="McurrDesignation" id="McurrDesignation"  className="input-formComponent" placeholder="Enter you Current Designation"  onChange={handleChange('McurrDesignation')} defaultValue={values.McurrDesignation} />
                      </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="McurrOrganization">Current Organization <span className="paragraph-primary--red">*</span></label>
                        <input type="text" name="McurrOrganization" id="McurrOrganization"  className="input-formComponent" placeholder="Enter your Current Organization"  onChange={handleChange('McurrOrganization')} defaultValue={values.McurrOrganization}/>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="year">Professional Experience <span className="paragraph-primary--red">*</span></label>
                        <input type="text" name="profExperience" id="profExperience" className="input-formComponent" placeholder="Enter your Professional Experience in years" onChange={handleChange('profExperience')} defaultValue={values.profExperience} />
                  </div>
                </MDBCol>
              </MDBRow>
              </form>
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
</div>

  )
}

export default Mentor;
