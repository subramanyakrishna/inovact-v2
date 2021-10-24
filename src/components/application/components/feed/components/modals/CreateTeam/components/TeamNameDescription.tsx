import React from 'react'
import { useSelector } from 'react-redux'
import { ICreateTeam } from 'redux/interfaces/teams.interface'
import { handleAddTeamChange } from 'StateUpdateHelper'

type Props = {
    teamDetails: ICreateTeam
    setTeamDetails: (teamDetails: ICreateTeam) => void
}

const TeamNameDescription = ({ setTeamDetails, teamDetails }: Props) => {
    return (
        <div className="team-name">
            <div className="team-name-title">
                <label>Team Title</label>
                <input
                    type="text"
                    placeholder="Give your project a suitable title"
                    onChange={(e: any) => {
                        setTeamDetails({
                            ...teamDetails,
                            name: e.target.value,
                        })
                        console.log(teamDetails)
                    }}
                />
            </div>
            <div>
                <input type="file" id="upload-media-input" hidden />
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
