import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useHistory } from 'react-router-dom'
interface Props {
    team: any
}

const TeamTags = ({ team }: Props) => {
    const [allTags, setallTags] = useState(false)
    const toggleReadMore = () => {
        setallTags(!allTags)
    }
    return (
        <div>
            {allTags ? (
                <ul className="teams-description__info__right__tags">
                    {team.tags?.map((tag: string, index: any) => {
                        return (
                            <li key={index}>
                                <div>
                                    <h6 className="teams-description__info__right__tags__tag sm-small">
                                        {tag}
                                    </h6>
                                </div>
                            </li>
                        )
                    })}
                    <h6
                        className=" teams-description__info__right__tags__tag__arrow sm-extrasmall"
                        onClick={toggleReadMore}
                    >
                        {allTags ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </h6>
                </ul>
            ) : (
                <ul className="teams-description__info__right__tags">
                    {team.tags?.slice(0, 1).map((tag: string, index: any) => {
                        return (
                            <li key={index}>
                                <div>
                                    <h6 className="teams-description__info__right__tags__tag sm-small">
                                        {tag}
                                    </h6>
                                </div>
                            </li>
                        )
                    })}
                    <h6
                        className=" teams-description__info__right__tags__tag__arrow sm-extrasmall"
                        onClick={toggleReadMore}
                    >
                        {allTags ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </h6>
                </ul>
            )}
        </div>
    )
}

const TeamDescription = ({ team }: Props) => {
    const [showAll, setShowAll] = useState(true)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            setShowAll(true)
        }
        if (window.innerWidth <= 768) {
            setShowAll(false)
        }
    })
    const history = useHistory()

    return (
        <div className="teams-description">
            <div className="teams-description__info">
                <div className="teams-description__info__left">
                    <img
                        src={
                            'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                        }
                        alt="teamImage"
                    />
                    <div className="teams-description__info__left__text">
                        <button
                            className=" button--blue text-align--center sm-small"
                            onClick={() => {
                                history.push(`/app/chats`)
                            }}
                        >
                            Group Chat
                        </button>
                    </div>
                </div>

                <div className="teams-description__info__right">
                    <span className="text-style--bold text-align--left text-size--big ">
                        {team.name}{' '}
                    </span>
                    <span
                        className="text-style--bold text-align--left text-size--big sm-small"
                        style={{ marginTop: '1rem' }}
                    >
                        Number of Projects :{' '}
                        <span
                            className="text-style--bold text-color--green  text-align--left text-size--big sm-small"
                            style={{ marginLeft: '1rem' }}
                        >
                            {team.projects.length}{' '}
                        </span>{' '}
                    </span>

                    <span className="text-style--bold text-align--left text-size--big sm-small">
                        Number of Ideas :{' '}
                        <span
                            className="text-style--bold text-align--left text-color--green text-size--big sm-small"
                            style={{ marginLeft: '1rem' }}
                        >
                            21{' '}
                        </span>{' '}
                    </span>
                    <span
                        className="text-style--bold text-align--left text-size--big sm-small"
                        style={{ marginTop: '15px' }}
                    >
                        Team Tags{' '}
                    </span>
                    {showAll ? (
                        <ul className="teams-description__info__right__tags">
                            {team.tags?.map((tag: string, index: any) => {
                                return (
                                    <li key={index}>
                                        <div>
                                            <h6 className="teams-description__info__right__tags__tag sm-small">
                                                {tag}
                                            </h6>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    ) : (
                        <TeamTags team={team} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default TeamDescription
