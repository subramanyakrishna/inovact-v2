import React from 'react';

function SortByDropDown(props: any) {
    const changeFilterOption = (option: string)=>{
        props.filterOptionSelector(option);
    }

    return (
        <div className="filter-dropdown" >
            <div className="filter-dropdown-content">
                <div className="filter-dropdown-parameter">
                    <label >Projects</label>
                </div>
                <div className="filter-dropdown-parameter">
                 Ideas
                </div>
                <div className="filter-dropdown-parameter">
                  Thoughts
                </div>
            </div>
        </div>
    )
}

export default SortByDropDown;
