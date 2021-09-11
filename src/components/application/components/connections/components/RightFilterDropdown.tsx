import React, {useState} from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function RightFilterDropdown() {

    const [showRoles, setShowRoles] = useState(true);
    const [showOrganizations, setShowOrganizations] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const handleRolesShow = (e:any)=>{
        setShowRoles(!showRoles);
    }
    const handleOrganizationsShow = ()=>{
        setShowOrganizations(!showOrganizations);
    }
    const handleSkillsShow = () =>{
        setShowSkills(!showSkills);
    }

    return (
        <div className="filter-dropdown">
            <div className="filter-dropdown-title">
                <span>Filter (Dropdown)</span>
            </div>
            <div className="filter-dropdown-content">
                <div className="filter-dropdown-parameter">
                    <label onClick={handleRolesShow}>Roles <span>{showRoles ? <ChevronRightIcon/>: <ExpandMoreIcon/>}</span></label>
                    {
                        showRoles &&
                        <div className="filter-dropdown-roles">
                            <label><span>Student</span> <input type="checkbox"/></label>
                            <label><span>Mentor</span> <input type="checkbox"/></label>
                            <label><span>Entrepreneur</span> <input type="checkbox"/></label>
                        </div>
                    }
                </div>
                <div className="filter-dropdown-parameter">
                    <label onClick={handleOrganizationsShow}>Organization <span>{showOrganizations ? <ChevronRightIcon/>: <ExpandMoreIcon/>}</span></label>
                    {
                        showOrganizations &&
                        <div className="filter-dropdown-roles">
                            <label><span>ABC pvt ltd.</span> <input type="checkbox"/></label>
                            <label><span>DEF pvt ltd.</span> <input type="checkbox"/></label>
                            <label><span>XYZ pvt ltd.</span> <input type="checkbox"/></label>
                        </div>
                    }
                </div>
                <div className="filter-dropdown-parameter">
                    <label onClick={handleSkillsShow}>Skills <span>{showSkills? <ChevronRightIcon/>: <ExpandMoreIcon/>}</span></label>
                    {
                        showSkills && 
                        <div className="filter-dropdown-roles">
                            <label><span>Python</span> <input type="checkbox"/></label>
                            <label><span>Javascript</span> <input type="checkbox"/></label>
                            <label><span>HTML/CSS</span> <input type="checkbox"/></label>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default RightFilterDropdown;
