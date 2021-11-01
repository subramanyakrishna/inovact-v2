import React, { useState } from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import EditIcon from '@material-ui/icons/Edit'
import { imageUploader } from 'imageUpload/imageUploader'
import { useDispatch ,useSelector} from 'react-redux'
import { updateTeamAvatar } from 'redux/actions/teams'
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
    const dispatch= useDispatch();
    const loadFile = async (e: any) => { 
        if(e.target.files){
            const data = await imageUploader(e.target.files)
           dispatch(updateTeamAvatar({team_id: team.id,avatar:data[0].url}))
        }
    }
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
                <input
                type="file"
                id="upload-media-input"
                hidden
                onChange={loadFile}
            />
            <label
                htmlFor="upload-media-input"
                className={'settings-my-profile-nametag-imageAndEditContainer'}
            >
                <div className="settings-my-profile-nametag-img-container">
                    <img src={team.avatar} alt="teamImage" />
                </div>
                <div className="settings-my-profile-nametag-editcontainer">
                    {' '}
                    <button>
                        <EditIcon
                            fontSize="small"
                            style={{ color: 'white' }}
                        ></EditIcon>
                    </button>
                </div>
            </label>

                    {/* <img
                        src={
                            'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'
                        }
                        alt="teamImage"
                    /> */}
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
                            {team.ideas.length}{' '}
                        </span>{' '}
                    </span>
                    <span
                        className="text-style--bold text-align--left text-size--big sm-small"
                        style={{ marginTop: '15px' }}
                    >
                        Team Tags{' '}
                    </span>
                    { team.tags !== 0 ?(   showAll ? (
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
                    )):(
                        <div className="text-align--left">No Tags Yet </div>
                    ) }
                
                </div>
            </div>
        </div>
    )
}
export default TeamDescription
