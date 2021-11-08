import React from 'react'
import RoleRequired from './components/RoleRequired'
import { useSelector } from 'react-redux'
import axios from 'axios'

function RequestToJoin(props: any) {
    const allTeams = useSelector((state: any) => state.teams.teams)
    const rolesRequired = [
        {
            role: 'Front End Developer',
            skills: ['CSS', 'HTML', 'React'],
        },
        {
            role: 'Back End Developer',
            skills: ['NodeJS', 'JavaScript'],
        },
        {
            role: 'Marketing',
            skills: ['Communication', 'Networking'],
        },
        {
            role: 'Data Analyst',
            skills: ['Python', 'Jupyter NoteBook'],
        },
    ]

    const handleJoinMember = async (e: any) => {
        console.log(props.team_id)
        const response = await axios({
            method: 'post',
            url: 'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/team/request',
            data: {
                team_id: props.team_id,
            },
            headers: {
                Authorization: localStorage.getItem('user'),
            },
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>
                    &times;
                </button>
                <label className="modal_cover-title">
                    Request to join Jane's Team
                </label>
                <div className="modal_content">
                    <div className="roles-required-heading">
                        <span className="roles-required-heading-main">
                            Roles Required:
                        </span>
                        <span className="roles-required-heading-description">
                            Jane's team is looking for the roles mentioned
                            below. Select all the skills which you are
                            interested in working on.
                        </span>
                    </div>
                    <div className="roles-required-container">
                        {rolesRequired.map((ele: any) => {
                            return (
                                <RoleRequired
                                    role={ele.role}
                                    skills={ele.skills}
                                />
                            )
                        })}
                    </div>
                    <button
                        className="roles-required-request-btn"
                        onClick={handleJoinMember}
                    >
                        Send Request
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RequestToJoin
