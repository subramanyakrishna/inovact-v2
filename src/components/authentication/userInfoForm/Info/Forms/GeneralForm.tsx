import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import  InputField from 'components/authentication/userInfoForm/Info/FormFields/InputField';
import  SelectField from 'components/authentication/userInfoForm/Info/FormFields/SelectField';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'

const years =[
  {value:"1",
  label:'2001'
},
{value:"2",
label:'2002'
},
  ];
  const degrees=[
    {value:"1",
  label:'B.E'},
  {value:"2",
  label:'B.Com'},
  {value:"3",
  label:'B.sc'},
  ];
  
export default function AddressForm(props :any) {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
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
                              <input 
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
                              <input 
                              name={firstName.name} 
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
                                  <input 
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
                              <InputField
                               name={year.name}
                                label={year.label}
                                  data={years}
                                
                                />
                        </div>
                      </MDBCol>r
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md='12'>
                      <InputField
           name={degree.name}
           label={degree.label}
           fullWidth
         />
                      </MDBCol>
                    </MDBRow>
                    
                    </div>
              <div> {firstName.error && <div>hi</div>} </div>
                </section>
    </React.Fragment>
  );
}