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
    const [teamDetails, setTeamDetails] = useState<any>({
        name: 'New team',
        looking_for_members: false,
        looking_for_mentor: false,
        tags: [],
        avatar: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
        roles: [ ],
        members: [],
        // projects:[],
    })

    const addRoles = ({ id, skills }: Iroles) => {
        console.log('role', id)
        console.log('skills', skills)
        setTeamDetails({
            ...teamDetails,
            roles: [...teamDetails.roles, { id, skills }],
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
        // console.log('teamDetails', teamDetails)
        // const newTeam = {
        //     name: 'New team',
        //     looking_for_members: false,
        //     looking_for_mentor: false,
        //     tags: [1, 2, 3],
        //     avatar: 'https://www.google.com',
        //     roles: [
        //         {
        //             id: 1,
        //             skills: [
        //                 {
        //                     id: 1,
        //                     proficiency: 'expert',
        //                 },
        //             ],
        //         },
        //         {
        //             id: 1,
        //             skills: [
        //                 {
        //                     id: 1,
        //                     proficiency: 'beginner',
        //                 },
        //             ],
        //         },
        //     ],
        //     members: [
        //         { email: 'khushilms.cs19@bmsce.ac.in', role: 1 },
        //         { email: 'khushilsindhwad@gmail.com', role: 1 },
        //     ],
        // }
        // @ts-ignore
        dispatch(createTeam(teamDetails))
        props.closeModal()
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
                    {/* <div className="modal_part_two">
                        <div className="modal_part_two-member-mentor">
                            <div>
                                <label>Looking for team members</label>
                                <div
                                    onClick={() => {
                                        setTeamDetails({
                                            ...teamDetails,
                                            looking_for_members:
                                                !teamDetails.looking_for_members,
                                        })
                                    }}
                                >
                                    <SwitchSlider />
                                </div>
                            </div>
                            <div>
                                <label>Looking for a mentor</label>
                                <div
                                    onClick={() => {
                                        setTeamDetails({
                                            ...teamDetails,
                                            looking_for_mentor:
                                                !teamDetails.looking_for_mentor,
                                        })
                                    }}
                                >
                                    <SwitchSlider />
                                </div>
                            </div>
                        </div>
                        {teamDetails.looking_for_members && (
                            <div className="modal_part_two-roles-looking-for">
                                <span>What roles are you looking for?</span>
                                {teamDetails.roles.map(
                                    (ele: any, index: any) => {
                                        console.log(teamDetails.roles)
                                        return (
                                            <RolesLookingFor
                                                role={ele.role}
                                                skillSelected={ele.skillNeeded}
                                                removeTheRole={removeRole}
                                                id={index}
                                            />
                                        )
                                    }
                                )}
                                <AddRolesLookingFor
                                    addAnotherRole={addRoles}
                                    setTeamDetails={setTeamDetails}
                                    teamDetails={teamDetails}
                                />
                            </div>
                        )}
                    </div> */}
                    <div className="modal_cover-post-btn">
                        <button onClick={() => addTeam()}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam
