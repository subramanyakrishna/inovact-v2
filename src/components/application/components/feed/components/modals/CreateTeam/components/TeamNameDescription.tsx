import { imageUploader } from 'imageUpload/imageUploader'
import React from 'react'
import { ICreateTeam } from 'redux/interfaces/teams.interface'

type Props = {
    teamDetails: ICreateTeam
    setTeamDetails: (teamDetails: ICreateTeam) => void
}

const TeamNameDescription = ({ setTeamDetails, teamDetails }: Props) => {
    const loadFile = async (e: any) => {
        imageUploader(e.target.files).then((data: any) => {
            setTeamDetails({
                ...teamDetails,
                avatar: data[0].url,
            })
        })
    }
    return (
        <div className="team-name">
            <div className="team-name-title">
                <label>Team Title</label>
                <input
                    type="text"
                    placeholder="Give your idea a suitable title"
                    onChange={(e: any) => {
                        setTeamDetails({
                            ...teamDetails,
                            name: e.target.value,
                        })
                    }}
                />
            </div>
            <div>
                <input
                    type="file"
                    id="upload-media-input"
                    hidden
                    onChange={loadFile}
                />
                <label
                    className="upload-media-btn"
                    htmlFor="upload-media-input"
                >
                    Upload Media
                </label>
            </div>
        </div>
    )
}

export default TeamNameDescription
