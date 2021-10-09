import React, {useState} from 'react';
//Components
import TeamNameDescription from './components/TeamNameDescription';
import TeamMembers from './components/TeamMembers';
import TagsCovered from './components/TagsCovered';


function CreateTeam(props: any) {
    const [allRolesNeeded, setAllRolesNeeded] = useState<Object[]>([]);

    const [allTeamMembers, setAllTeamMembers] = useState<Object[]>([]);

    return (
        <div className="modal_main">
            <div className="modal_cover">
                <button className="close-modal" onClick={props.closeModal}>&times;</button>
                <label className="modal_cover-title">Create Team</label>
                <div className="modal_content">
                    <div>    
                        <TeamNameDescription/>
                        <TagsCovered/>
                        <TeamMembers/>                   
                    </div>
                    <div className="modal_cover-post-btn">
                        <button>Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam;
