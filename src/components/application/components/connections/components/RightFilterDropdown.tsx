import React from 'react'

function RightFilterDropdown() {
    return (
        <div className="filter-dropdown">
            <div className="filter-dropdown-title">
                <span>Filter (Dropdown)</span>
            </div>
            <div className="filter-dropdown-content">
                <div>
                    <label>Roles <span>{">"}</span></label>
                    {
                        <div className="filter-dropdown-roles">
                            <label>Student<input type="checkbox"/></label>
                            <label>Mentor<input type="checkbox"/></label>
                            <label>Entrepreneur<input type="checkbox"/></label>
                        </div>
                    }
                </div>
                <div>
                    <label>Organization</label>
                </div>
                <div>
                    <label>Skills</label>
                </div>
            </div>
        </div>
    )
}

export default RightFilterDropdown;
