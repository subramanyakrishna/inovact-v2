import React from 'react'
import datascience from '../../../../images/user-info/aoi/datascience.svg'
import project from '../../../../images/user-info/aoi/projectmanagement.svg'
import webdev from '../../../../images/user-info/aoi/webdev.svg'
import cloud from '../../../../images/user-info/aoi/cloud.svg'
import ml from '../../../../images/user-info/aoi/ml.svg'
import robotics from '../../../../images/user-info/aoi/robotics.svg'
import coding from '../../../../images/user-info/aoi/coding.svg'
import business from '../../../../images/user-info/aoi/businessanalysis.svg'
import gaming from '../../../../images/user-info/aoi/gaming.svg'
import electrical from '../../../../images/user-info/aoi/electrical.svg'
import uiux from '../../../../images/user-info/aoi/uiux.svg'
import fintech from '../../../../images/user-info/aoi/fintech.svg'
import economics from '../../../../images/user-info/aoi/economics.svg'
import mechanical from '../../../../images/user-info/aoi/mechanical.svg'
import hr from '../../../../images/user-info/aoi/HR.svg'
import marketing from '../../../../images/user-info/aoi/marketing.svg'
import stock from '../../../../images/user-info/aoi/stock.svg'

type AppProps = {
    setFormStep: any
    handleChange: any
    values: any 
}

const aoi = [
    {
        name: 'Data Science',
        image: datascience,
    },
    {
        name: 'Project Management',
        image: project,
    },
    {
        name: 'Web dev',
        image: webdev,
    },
    {
        name: 'Cloud Computing',
        image: cloud,
    },
    {
        name: 'ML and AI',
        image: ml,
    },
    {
        name: 'Robotics',
        image: robotics,
    },
    {
        name: 'Competetive coding',
        image: coding,
    },
    {
        name: 'Business Analytic',
        image: business,
    },
    {
        name: 'Gaming',
        image: gaming,
    },
    {
        name: 'Electrical',
        image: electrical,
    },
    {
        name: 'UI/UX',
        image: uiux,
    },
    {
        name: 'FinTech',
        image: fintech,
    },
    {
        name: 'Economics',
        image: economics,
    },

    {
        name: 'Mechanical',
        image: mechanical,
    },
    {
        name: 'Human Resources',
        image: hr,
    },
    {
        name: 'Marketing',
        image: marketing,
    },
    {
        name: 'Stock Trading',
        image: stock,
    },
]
const AreaOfInterest = ({
    setFormStep,
    handleChange,
    values,
}: AppProps) => {
    const Continue = (e: any) => {
        e.preventDefault()
        setFormStep(5)
    }
    const Previous = (e: any) => {
        e.preventDefault()
        setFormStep(2)
    }

    return (
        <div className="user-info">
            <div className="user-info__card">
                <section className="area-of-interest">
                    <div className="area-of-interest__text">
                        <h6 className="heading-secondary size-small">
                            Tell Us What You Are Interested In
                        </h6>
                        <p className="paragraph-primary--green">
                            Make sure you select atleast three topics
                        </p>
                    </div>
                    <div className="area-of-interest__form">
                        <form>
                            <ul className="area-of-interest__form__list">
                                {aoi.map(({ name, image }, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="area-of-interest__form__list__item">
                                                <input
                                                    type="checkbox"
                                                    id={`aoi-${index}`}
                                                    name={name}
                                                    value={name}
                                                    hidden
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="checkbox-label"
                                                    htmlFor={`aoi-${index}`}
                                                >
                                                    <img src={image} alt="" />
                                                    {name}
                                                </label>
                                            </div>
                                        </li>
                                    )
                                })}
                                   <li >
                                            <div className="area-of-interest__form__list__item">
                                                <input
                                                    type="checkbox"
                                                    id="more"
                                                    name="more"
                                                    value="more"
                                                    hidden
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className="checkbox-label"
                                                    htmlFor="more"
                                                    style={{padding:' 0.5rem',fontStyle:'600',fontSize:'1.5rem',textAlign:'center',display:'flex',alignSelf:'center'}}
                                                >
                                                   ....
                                                </label>
                                            </div>
                                        </li>
                            </ul>
                        </form>
                    </div>
                    <div className="buttons">
                        <button
                                            onClick={ Previous } className="button button--white">Back</button>
                            <button 
                                            onClick={ Continue }  className="button button--green">Next</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AreaOfInterest
