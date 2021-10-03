import React from 'react';


import student from 'images/user-info/student.png'
import enterprenuer from 'images/user-info/analytics.png'
import mentor from 'images/user-info/mentor.png'
import { MDBRow, MDBCol} from 'mdb-react-ui-kit'

import {Field } from 'formik'


export default function RoleForm(props :any) {
  const {
    formField: {
        role  
    }
  } = props;
  const [activeIndex, setActiveIndex] = React.useState(0)

  const toggleClick = (index: number) => {
      setActiveIndex(index)
      console.log (role);
  }
 
  return (
      
    <React.Fragment>
     <section className="role-selection">
<div className="role-selection__text">
    <h6 className="heading-secondary">Select Profile</h6>
    <p className="paragraph-primary--red">
        *Mandatory fields
    </p>
</div>

<div className="role-selection__form">
<div className="role-selection__form__cards">
    <MDBRow>
        <MDBCol
           xs="12"
           sm="4"
           name="role"
           value="student"
            className="role-selection__form__cards__col"
            onClick={(event: any) => {
                toggleClick(0);
                props.handleChange("role", "Student");
            }}
        >
            <div
                className={
                    activeIndex === 0
                        ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                        : 'role-selection__form__cards__item'
                }
            >
          <Field type="radio" name="role" value="student" hidden/>
                <img
                    src={student}
                    alt="student"
                />
               <h6>Student</h6>
            </div>
        </MDBCol>

        <MDBCol
            xs="12"
            sm="4" 
            name="role"
           value="Mentor"   
            className="role-selection__form__cards__col"
            onClick={(event: any) => {
                toggleClick(1);
                props.handleChange('role', "Mentor");
            }}
        >
            <div
                className={
                    activeIndex === 1
                        ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                        : 'role-selection__form__cards__item'
                }
               
            >
                 <Field type="radio" name={role.name} value="mentor" hidden/>
                <img
                     src={mentor}
                       alt="mentor"
                       id="mentor"
                 
                />
                <h6>Mentor</h6>
            </div>
        </MDBCol>

        <MDBCol
            xs="12"
            
            sm="4"
            name="role"
           value="Enterprenuer"
            className="role-selection__form__cards__col"
            onClick={(event: any) => {
                toggleClick(2);
                props.handleChange("role", "Enterprenuer");
            }}
        >
            <div
                className={
                    activeIndex === 2
                        ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                        : 'role-selection__form__cards__item'
                }
               
            >
                 <Field type="radio" name="role" value="enterprenuer" hidden/>
                <img
                    src={enterprenuer}
                    id="enterprenuer"
                    alt="enterprenuer"
                   
                />
                <h6>Enterprenuer</h6>
            </div>
        </MDBCol>
    </MDBRow>
  </div>

</div>
</section>
    </React.Fragment>
  );
}