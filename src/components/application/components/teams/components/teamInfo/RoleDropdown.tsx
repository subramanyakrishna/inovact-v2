import React, {useState} from 'react';

function SortByDropDown(props: any) {
    const changeFilterOption = (option: string)=>{
        props.filterOptionSelector(option);
    }

    return (
        <div className="filter-dropdown" >
            <div className="filter-dropdown-content">
                <div className="filter-dropdown-parameter">
                    Delete
                </div>
                <div className="filter-dropdown-parameter">
                    Make Admin
                </div>
               
            </div>
        </div>
    )
}

export default SortByDropDown;
