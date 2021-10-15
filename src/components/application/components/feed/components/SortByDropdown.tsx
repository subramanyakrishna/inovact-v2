import React from 'react'

function SortByDropDown(props: any) {
    const changeFilterOption = (option: string) => {
        props.filterOptionSelector(option)
    }

    return (
        <div className="filter-dropdown">
            <div className="filter-dropdown-content">
                {['All', 'Projects', 'Ideas', 'Thoughts'].map(
                    (type: string, i: number) => (
                        <div className="filter-dropdown-parameter" key={i}>
                            <label
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginRight: '10px',
                                }}
                                onClick={() => changeFilterOption(type)}
                            >
                                <span>{type}</span>
                            </label>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default SortByDropDown
