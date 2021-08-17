import React from 'react';
import { MDBRow, MDBCol,MDBBtn ,MDBInput} from 'mdb-react-ui-kit'

type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const UserDetails = ({ prevStep,nextStep, handleChange, values }:AppProps) => {

  const Continue = (e: any) => {
    e.preventDefault();
    nextStep(3);
  }
  const Previous = (e:any) => {
    e.preventDefault();
    prevStep(1);
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
                      <label htmlFor="university">University/College <span className="paragraph-primary--red">*</span></label>
                      <MDBInput className="input" label="Enter you university/college" outline onChange={handleChange('university')} defaultValue={values.university}/>
                      </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="degree">Degree <span className="paragraph-primary--red">*</span></label>
                        <br />
                          <select className="Enter your degree">
                            <option>Choose your option</option>
                            <option value="1">BE</option>
                            <option value="2">BCOM</option>
                            <option value="3">BSC</option>
                          </select>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="year">Year Of Graduation<span className="paragraph-primary--red">*</span></label>
                        <br />
                        <select className="Enter your year of Graduation" >
                          <option>Choose your option</option>
                          <option value="1">BE</option>
                          <option value="2">BCOM</option>
                          <option value="3">BSC</option>
                        </select>
                  </div>
                </MDBCol>
              </MDBRow>
              </form>
           
              <div className="buttons">
              <MDBBtn color='default' 
                                onClick={ Previous } className="button button-white">Back</MDBBtn>
                <MDBBtn color='success' 
                                onClick={ Continue }  className="button button--green">Next</MDBBtn>
              </div>
            </div>
        </section>
    </div>
</div>)}

export default UserDetails;
