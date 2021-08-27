import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'

type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const year=[
  { 
    year:'2011'
  },
  { 
    year:'2012'
  },
  { 
    year:'2013'
  },
  { 
    year:'2014'
  },
];
const degree=[
  {degree:'BE'},
  {degree:'B Sc'},
  {degree:'B Com'}
];

function Form({ prevStep,nextStep, handleChange, values }:AppProps){
    return(
        <form>
        <MDBRow>
          <MDBCol md='12'>
                <div className="form-group">
                 <label htmlFor="university">University/College <span className="paragraph-primary--red">*</span></label>
                 <input id="university" name="university" className="input-formComponent" type="text" placeholder="Enter Your University or College"  onChange={handleChange('university')} defaultValue={values.university}/>
                </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md='12'>
            <div className="form-group">
                  <label htmlFor="degree">Degree <span className="paragraph-primary--red">*</span></label>
                  <br />
                    <select className="input-formComponent" placeholder="Enter your degree">
                      <option>Enter your degree of Graduation</option>
                      {degree.map(({degree}, index) => {
                            return (
                              <option  value={degree} onChange={handleChange('degree')}>{degree} </option>
                            );
                        })}
                    </select>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md='12'>
            <div className="form-group">
                  <label htmlFor="year">Year Of Graduation<span className="paragraph-primary--red">*</span></label>
                  <br />
                  <select className="input-formComponent" placeholder="Enter your year of Graduation" >
                    <option>Enter your year of Graduation</option>
                    {year.map(({year}, index) => {
                            return (
                              <option value={year} onChange={handleChange('year')}>{year} </option>
                            );
                        })}
                  </select>
            </div>
          </MDBCol>
        </MDBRow>
        </form>
     
    )
}
export default Form;