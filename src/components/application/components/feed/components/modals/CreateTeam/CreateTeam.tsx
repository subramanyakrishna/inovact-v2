import React, { useState } from 'react'
import {
    ICreateTeam,
    Iroles,
} from '../../../../../../../redux/interfaces/teams.interface'
import AddRolesLookingFor from '../UploadProject/components/AddRolesLookingFor'
import RolesLookingFor from '../UploadProject/components/RolesLookingFor'
import SwitchSlider from '../UploadProject/components/SwitchSlider'
import TagsCovered from './components/TagsCovered'
import TeamMembers from './components/TeamMembers'
//Components
import TeamNameDescription from './components/TeamNameDescription'
import { createTeam } from 'redux/actions/teams'
import { useDispatch } from 'react-redux'

const CreateTeam = (props: any) => {
    const [teamDetails, setTeamDetails] = useState<ICreateTeam>({
        name: '',
        tags: [],
        looking_for_members: false,
        looking_for_mentor: false,
        roles: [],
    })

    const addRoles = ({ roleId, skills }: Iroles) => {
        console.log('role', roleId)
        console.log('skills', skills)
        setTeamDetails({
            ...teamDetails,
            roles: [...teamDetails.roles, { roleId, skills }],
        })
    }

    const removeRole = (id: any) => {
        let newRoles = teamDetails.roles
        newRoles.splice(id, 1)
        setTeamDetails({
            ...teamDetails,
            roles: newRoles,
        })
    }

    const dispatch = useDispatch()
    const addTeam = () => {
        console.log('teamDetails', teamDetails)
        // dispatch(createTeam(teamDetails))
    }

    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>
                    &times;
                </button>
                <label className="modal_cover-title">Create Team</label>
                <div className="modal_content">
                    <div>
                        <TeamNameDescription
                            setTeamDetails={setTeamDetails}
                            teamDetails={teamDetails}
                        />
                        <TagsCovered
                            setTeamDetails={setTeamDetails}
                            teamDetails={teamDetails}
                        />
                        <TeamMembers />
                    </div>

                    <div className="modal_cover-post-btn">
                        <button onClick={addTeam}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam
