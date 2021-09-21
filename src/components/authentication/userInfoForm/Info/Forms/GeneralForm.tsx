import React from 'react';

import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import {Field } from 'formik';


const yearOptions = [
  { value: "1960", label: "1960" },
  { value: "1961", label: "1961" },
  { value: "1962", label: "1962" },
  { value: "1963", label: "1963" },
  { value: "1964", label: "1964" },
  { value: "1965", label: "1965" }
];
  const degrees=[
    {value:"1",
  label:'B.E'},
  {value:"2",
  label:'B.Com'},
  {value:"3",
  label:'B.sc'},
  ];
  
export default function GeneralForm(props :any) {
  const {
    
    formField: {
        firstName,
        lastName,
        university,
        degree,
        year,    
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
                              <label htmlFor="university">First Name <span className="paragraph-primary--red">*</span></label>
                              <Field
                              name={firstName.name} 
                              className="input-formComponent" 
                              type="text" 
                              placeholder="Enter Your FirstName" 
                            
                              />
                           </div>
                        </MDBCol>
                        <MDBCol md='6'>
                             <div>
                              <label htmlFor="university">Last Name <span className="paragraph-primary--red">*</span></label>
                              <Field
                              name={lastName.name} 
                              className="input-formComponent" 
                              type="text" 
                              placeholder="Enter Your LastName" 
                              
                              />
                           </div>
                        </MDBCol>
                    </MDBRow>
                   
                    <MDBRow>
                    <MDBCol md='12'>
                                  <label htmlFor="university">University/College <span className="paragraph-primary--red">*</span></label>
                                  <Field
                                  name={university.name}
                                  className="input-formComponent" 
                                  type="text" 
                                  placeholder="Enter Your University or College" 
                                />
                              </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='12'>
                        <div className="form-group">
                              <label htmlFor="degree">Degree <span className="paragraph-primary--red">*</span></label>
                              <br />
                              <Field  className="input-formComponent"  as="select" name="degree" id="degree">
                    <option value="Enter your degreee" label="Enter your degreee">
                    Enter your degreee{" "}
                    </option>
                    {degrees.map(item => 
                      <option value={item.value} label={item.label}>{item.value}</option>
                  )} 
    </Field>
                        </div>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md='12'>
                      <label htmlFor="year">Year Of Graduation<span className="paragraph-primary--red">*</span></label>
                  <br />
                  <Field  className="input-formComponent"  as="select" name="year" id="year">
                    <option value=" Select the  Year Of Graduation" label=" Select the  Year Of Graduation">
                    Select the  Year Of Graduation{" "}
                    </option>
                    {yearOptions.map(item => 
                      <option value={item.value} label={item.label}>{item.value}</option>
                  )} 
    </Field>
                            </MDBCol>
                    </MDBRow>
                    
                    </div>
              <div> {firstName.error && <div>hi</div>} </div>
                </section>
    </React.Fragment>
  );
}