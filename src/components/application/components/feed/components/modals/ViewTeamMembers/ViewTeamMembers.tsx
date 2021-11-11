import React from 'react'
import TeamMemberCard from './components/TeamMemberCard'

function ViewTeamMembers(props: any) {
    const teamMembers = [
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
        {
            name: 'Jane Doe',
            role: 'Mentor',
            designation: 'Designation',
        },
    ]
    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props?.closeModal}>
                    &times;
                </button>
                <div className="modal-complete-title">
                    <label className="modal_cover-title">Jane's Team</label>
                    <label className="modal-complete-title-description">
                        Current Team Working on Project
                    </label>
                </div>

                <div className="modal_content">
                    <div className="all-team-member-cards">
                        {teamMembers.map((mem: any) => {
                            return (
                                <TeamMemberCard
                                    name={mem.name}
                                    role={mem.role}
                                    designation={mem.designation}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTeamMembers
