import React from 'react';
import { MDBRow, MDBCol} from 'mdb-react-ui-kit'
type AppProps = {
  setFormStep: any,
    handleChange: any,
    values:any,
    
};
const Enterprenuer = ({ 
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
         <section className="user-details">

            <div className="user-details__text">
                <h6 className="heading-secondary">Let Us Know More About You</h6>
                <p className="paragraph-primary--red">*Mandatory fields</p>
            </div>

            <div className="user-details__form">
              <form>
              <MDBRow>
                <MDBCol md='12'>
                      <div className="form-group">
                      <label htmlFor="EcurrOrganization">Current Organization <span className="paragraph-primary--red">*</span></label>
                    <input type="text" name="EcurrOrganization" id="EcurrOrganization"  className="input-formComponent" placeholder="Enter you Current Organization"  onChange={handleChange('EcurrOrganization')} defaultValue={values.EcurrOrganization} />
                      </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="EcurrRole">Current  Role <span className="paragraph-primary--red">*</span></label>
                        <input type="text" name="EcurrRole" id="EcurrRole" className="input-formComponent" placeholder="Enter your Current Role"  onChange={handleChange('EcurrRole')} defaultValue={values.EcurrRole} />
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='12'>
                  <div className="form-group">
                        <label htmlFor="year">When did you start your Enterprenuer Journey? <span className="paragraph-primary--red">*</span></label>
                        <input type="text" name="EstartOfJourney" id="EstartOfJourney" className="input-formComponent" placeholder="Enter your year you started your journey as an enterprenuer"   onChange={handleChange('EstartOfJourney')} defaultValue={values.EstartOfJourney}/>
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

export default Enterprenuer;
export {};
