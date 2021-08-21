import React from 'react'
import student from '../../../../images/user-info/student.png'
import enterprenuer from '../../../../images/user-info/analytics.png'
import mentor from '../../../../images/user-info/mentor.png'
import { MDBRow, MDBCol} from 'mdb-react-ui-kit'

type AppProps = {
    setFormStep: any
    handleChange: any
    values: any
}
const RoleSelection = ({ setFormStep, handleChange, values }: AppProps) => {
    const Continue = (e: any) => {
        setFormStep(2)
    }
    const [activeIndex, setActiveIndex] = React.useState(0)

    const toggleClick = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className="user-info">
            <div className="user-info__card">

                <section className="role-selection">

                    <div className="role-selection__text">
                        <h6 className="heading-secondary">Select Profile</h6>
                        <p className="paragraph-primary--red">
                            *Mandatory fields
                        </p>
                    </div>
            <form className="role-selection__form">
                 <div className="role-selection__form__cards">
                        <MDBRow>
                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(0)}
                            >
                                <div
                                    className={
                                        activeIndex === 0
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                  
                                >
                                    <img
                                        src={student}
                                        id="student"
                                        onClick={handleChange('role')}
                                        alt="student"
                                    />
                                    <h6>Student</h6>
                                </div>
                            </MDBCol>

                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(1)}
                            >
                                <div
                                    className={
                                        activeIndex === 1
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                   
                                >
                                    <img
                                        src={mentor}
                                           alt="mentor"
                                           id="mentor"
                                     
                                           onClick={handleChange('role')}
                                    />
                                    <h6>Mentor</h6>
                                </div>
                            </MDBCol>

                            <MDBCol
                                sm="12"
                                md="6"
                                lg="4"
                                className="role-selection__form__cards__col"
                                onClick={() => toggleClick(2)}
                            >
                                <div
                                    className={
                                        activeIndex === 2
                                            ? 'role-selection__form__cards__item role-selection__form__cards__item--active'
                                            : 'role-selection__form__cards__item'
                                    }
                                   
                                >
                                    <img
                                        src={enterprenuer}
                                        id="enterprenuer"
                                        onClick={handleChange('role')}
                                        alt="enterprenuer"
                                       
                                    />
                                    <h6>Enterprenuer</h6>
                                </div>
                            </MDBCol>
                        </MDBRow>
                      </div>
                      
                    
</form>
                    <div className="buttons buttons--center ">
                      <button color='success' 
                                  onClick={ Continue }  className="button button--green ">Next</button>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default RoleSelection
