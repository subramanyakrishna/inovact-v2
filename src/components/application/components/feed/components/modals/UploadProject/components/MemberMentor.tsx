import React from 'react';
import Switch_slider from './Switch_slider';


function MemberMentor(props: any) {
    return (
        <div className="modal_part_two-member-mentor">
            <div>
                <label>Looking for team members</label>
                <div onClick={props.teamMemberNeeded}>
                    <Switch_slider/>
                </div>
                
            </div>
            <div>
                <label>Looking for a mentor</label>
                <Switch_slider/>
            </div>
        </div>
    )
}

export default MemberMentor;
