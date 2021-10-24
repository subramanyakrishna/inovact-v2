import React, { useState } from 'react'
import SkillTags from '../../UploadProject/components/SkillTags'
import { ICreateTeam } from 'redux/interfaces/teams.interface'
import Tags from './Tags'

type Props = {
    teamDetails: ICreateTeam
    setTeamDetails: (teamDetails: ICreateTeam) => void
}

const TagsCovered = ({ setTeamDetails, teamDetails }: Props) => {
    const [tag, setTag] = useState('')

    const removeTag = (id: number) => {
        setTeamDetails({
            ...teamDetails,
            tags: teamDetails.tags.filter((ele, idx) => idx !== id),
        })
    }

    return (
        <div className="tags-covered">
            <label>Team Tags</label>
            <input
                type="text"
                placeholder="Type out the skills used"
                onChange={(e) => setTag(e.target.value)}
            />
            <button
                onClick={() => {
                    if (!teamDetails.tags.includes(tag)) {
                        setTeamDetails({
                            ...teamDetails,
                            tags: [...teamDetails.tags, tag],
                        })
                        console.log(teamDetails)
                        setTag('')
                    }
                }}
                className="upload-media-btn"
            >
                +Add Tag
            </button>
            <div>
                {teamDetails.tags.map((tag, id) => {
                    return <Tags tag={tag} id={id} removeTag={removeTag} />
                })}
            </div>
        </div>
    )
}

export default TagsCovered
