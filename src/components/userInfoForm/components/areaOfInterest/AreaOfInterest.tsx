import React from 'react';
import a1 from '../../../../images/user-info/list1.png'
import a2 from '../../../../images/user-info/list2.png'
import a3 from '../../../../images/user-info/list3.png'
import { MDBBtn } from 'mdb-react-ui-kit'
type AppProps = {
    nextStep: any,
    handleChange: any,
    values:any,
    prevStep:any
};
const aoi=[
  { 
    name:'React',
    image:a1,
  },
  { 
    name:'HTML',
    image:a2,
  },
  { 
    name:'Cloud Computing',
    image:a3,
  },
  { 
    name:'Machine Learning',
    image:a1,
  },
  { 
    name:'React',
    image:a2,
  },
  { 
    name:'React',
    image:a3,
  },
  { 
    name:'React',
    image:a1,
  },
  { 
    name:'React',
    image:a2,
  },
  { 
    name:'React',
    image:a2,
  },
  { 
    name:'...',
    image:a3,
  },
 
]
const AreaOfInterest = ({ prevStep,nextStep, handleChange, values }:AppProps) => {
  const Continue = (e: any) => {
    e.preventDefault();
    nextStep(5);
  }
  const Previous = (e:any) => {
    e.preventDefault();
    prevStep(2);
  }

  return (

    <div className="user-info">
      <div className="user-info__card">
        
         <section className="area-of-interest">
            <div className="area-of-interest__text">
                <h6 className="heading-secondary">Tell us What you are interested in</h6>
                <p className="paragraph-primary--green">Make sure you select atleast three topics</p>
            </div>
            <div className="area-of-interest__form">
            <form>
              <ul className="area-of-interest__form__list" >
              {aoi.map(({name,image}, index) => {
                    return (
                      <li key={index}>
                        <div className="area-of-interest__form__item">
                            <input
                              type="checkbox"
                              id={`aoi-${index}`}
                              name={name}
                              value={name}
                              hidden
                              onChange={handleChange}
                            />
                            <label className="checkbox-label" htmlFor={`aoi-${index}`}><img src={image} alt=""/>{name}</label>
                        </div>
                      </li>
                    );
                })}
              </ul>
            </form>
            <div className="buttons">
              <MDBBtn color='default' 
                                onClick={ Previous } class="button button-white">Back</MDBBtn>
                <MDBBtn color='success' className="button--green"
                                onClick={ Continue }  class="button button--green">Next</MDBBtn>
              </div>
          </div>
        </section>
    </div>
</div>

  )
}

export default AreaOfInterest;
