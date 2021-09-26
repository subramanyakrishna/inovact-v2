import React from 'react'

interface Toggle {
    handleChecked(checked: any): any
}
const Toggle: React.FC<Toggle> = ({ handleChecked }) => {
    return (
        <label className={'toggle'}>
            <input type="checkbox" onChange={handleChecked} />
            <span />
        </label>
    )
}
export default Toggle
