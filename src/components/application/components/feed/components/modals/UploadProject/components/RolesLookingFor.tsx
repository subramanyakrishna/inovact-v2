import React from 'react'
import SkillTags from './SkillTags';

function RolesLookingFor() {
    return (
        <div className="roles_looking_for">
            <div className="roles_looking_for-add-role">
                <input type="text"/>
                <button>+Add Role</button>
            </div>
            <div className="roles_looking_for-add-skills">
                <input type="text" placeholder="Type out the skills required for the above mentioned role"/>
                <div>
                    <SkillTags skill="OOP"/>
                    <SkillTags skill="Python"/>
                    <SkillTags skill="C++"/>
                    <SkillTags skill="Files"/>
                </div>
                
            </div>
        </div>
    )
}

export default RolesLookingFor;
