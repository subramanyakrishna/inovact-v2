import React, { useEffect } from 'react'

interface ToggleInterface {
    handleChecked(checked: any): any
    checked: boolean
}
const Toggle: React.FC<ToggleInterface> = ({ handleChecked, checked }) => {
    useEffect(() => {}, [checked])
    return (
        <label className={'toggle'}>
            <input type="checkbox" onChange={handleChecked} checked={checked} />
            <span />
        </label>
    )
}
export default Toggle
