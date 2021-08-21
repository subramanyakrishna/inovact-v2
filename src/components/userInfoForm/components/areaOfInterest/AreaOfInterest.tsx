import React from 'react'
import a1 from '../../../../images/user-info/list1.png'
import a2 from '../../../../images/user-info/list2.png'
import a3 from '../../../../images/user-info/list3.png'

type AppProps = {
    nextStep: any
    handleChange: any
    values: any
    prevStep: any
}
const aoi = [
    {
        name: 'Data Science',
        image: a1,
    },
    {
        name: 'Web Dev',
        image: a3,
    },
    {
        name: 'ML and AI',
        image: a2,
    },
    {
        name: 'Robotocis',
        image: a3,
    },
    {
        name: 'Gaming',
        image: a2,
    },
    {
        name: 'Electrical',
        image: a2,
    },
    {
        name: 'Project Managenment',
        image: a2,
    },
    {
        name: 'Economics',
        image: a2,
    },
    {
        name: 'Mech',
        image: a2,
    },
    {
        name: 'Competetive Coding',
        image: a1,
    },
    {
        name: 'UI/UX',
        image: a2,
    },
    {
        name: 'FinTech',
        image: a2,
    },
    {
        name: 'Business Analysis',
        image: a2,
    },

    {
        name: 'Marketing',
        image: a2,
    },

    {
        name: 'Cloud Computing',
        image: a1,
    },
    {
        name: '...',
        image: a3,
    },
]
const AreaOfInterest = ({
    prevStep,
    nextStep,
    handleChange,
    values,
}: AppProps) => {
    const Continue = (e: any) => {
        e.preventDefault()
        nextStep(5)
    }
    const Previous = (e: any) => {
        e.preventDefault()
        prevStep(2)
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
