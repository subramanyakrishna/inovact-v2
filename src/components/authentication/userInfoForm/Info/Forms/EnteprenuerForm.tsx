import React from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import {Field } from 'formik';



  
export default function EnteprenuerForm(props :any) {
  const {
   
    formField: {
        EcurrOrganization,
        EcurrRole,
        EstartOfJourney
  
    }
  } = props;
  return (
    <React.Fragment>
     
     <section className="user-details">
                    <div className="user-details__text">
                        <h6 className="heading-secondary">
                            Let Us Know More About You
                        </h6>
                        <p className="paragraph-primary--red">
                            *Mandatory fields
                        </p>
                    </div>
                    <div className="user-details__form">
                    <MDBRow>
                        <MDBCol md='6'>
                             <div>
                              <label htmlFor="university">Enter Your Designation <span className="paragraph-primary--red">*</span></label>
                              <input
                              name={EcurrOrganization.name} 
                              className="input-formComponent" 
                              type="text" 
                              placeholder="Enter Your Designation" 
                              onChange={(e:any)=>props.handleChange("designation",e.target.value)}
                              />
                           </div>
                        </MDBCol>
                        <MDBCol md='6'>
                             <div>
                              <label htmlFor="university">Enter Your Organization Name<span className="paragraph-primary--red">*</span></label>
                              <input
                              name={ EcurrRole.name} 
                              className="input-formComponent" 
                              type="text" 
                              placeholder="Enter Your Current Organization" 
                              onChange={(e:any)=>props.handleChange("organization",e.target.value)}
                              />
                           </div>
                        </MDBCol>
                    </MDBRow>
                   
                    <MDBRow>
                    <MDBCol md='12'>
                                  <label htmlFor="university">Enter the number of Years of Experience <span className="paragraph-primary--red">*</span></label>
                                  <input
                                  name={EstartOfJourney.name}
                                  className="input-formComponent" 
                                  type="number" 
                                  placeholder="Enter the number of Years of Experience" 
                                  onChange={(e:any)=>props.handleChange("years_of_professional_experience",e.target.value)}
                                />
                              </MDBCol>
                    </MDBRow>
                    </div>
              
                </section>
    </React.Fragment>
  );
}