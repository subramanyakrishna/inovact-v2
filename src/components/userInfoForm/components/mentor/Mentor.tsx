import React from 'react';
import { MDBRow, MDBCol,MDBBtn ,MDBInput} from 'mdb-react-ui-kit'
type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const Mentor = ({ prevStep,nextStep, handleChange, values }:AppProps) => {

  const Continue = (e: any) => {
    e.preventDefault();
    nextStep(4);
  }
  const Previous = (e:any) => {
    e.preventDefault();
    prevStep(2);
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
                      <label htmlFor="university">Current Designation <span className="paragraph-primary--red">*</span></label>
                      <MDBInput className="input" label="Enter you Current Designation" outline onChange={handleChange('McurrDesignation')} defaultValue={values.McurrDesignation} />
                      </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="degree">Current Organization <span className="paragraph-primary--red">*</span></label>
                        <MDBInput className="input" label="Enter your Current Organization" outline  onChange={handleChange('McurrOrganization')} defaultValue={values.McurrOrganization}/>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="year">Professional Experience <span className="paragraph-primary--red">*</span></label>
                        <MDBInput className="input" label="Enter your Professional Experience in years" outline onChange={handleChange('profExperience')} defaultValue={values.profExperience} />
                  </div>
                </MDBCol>
              </MDBRow>
              </form>
           
              <div className="buttons">
              <MDBBtn color='default' 
                                onClick={ Previous } className="button button__white">Back</MDBBtn>
                <MDBBtn color='success' 
                                onClick={ Continue }  className="button button__green">Next</MDBBtn>
              </div>
                  

            </div>
          </section>
    </div>
</div>

  )
}

export default Mentor;
