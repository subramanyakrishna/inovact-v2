import React from 'react'
import SwitchSlider from './SwitchSlider'

function MemberMentor(props: any) {
    return (
        <div className="modal_part_two-member-mentor">
            <div>
                <label>Looking for team members</label>
                <div onClick={props.teamMemberNeeded}>
                    <SwitchSlider />
                </div>
            </div>
            <div>
                <label>Looking for a mentor</label>
                <SwitchSlider />
            </div>
        </div>
    )
}

export default MemberMentor
