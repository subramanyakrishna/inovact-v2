import React from 'react'

function ProjectStatus() {
    return (
        <div className="modal_part_two-project-status">
            <span>Project Status</span>
            <div>
                <div>
                    <input type="radio" name="project-status"/><label >Just Started</label>
                </div>
                
                <div>
                    <input type="radio" name="project-status"/><label>In Progress</label>
                </div>
                
                <div>
                    <input type="radio" name="project-status"/><label>Nearing Completion</label>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectStatus;
