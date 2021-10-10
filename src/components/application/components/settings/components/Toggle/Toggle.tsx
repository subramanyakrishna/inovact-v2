import React, { useEffect } from 'react'

interface Toggle {
    handleChecked(checked: any): any
    checked: boolean
}
const Toggle: React.FC<Toggle> = ({ handleChecked, checked }) => {
    useEffect(() => {
        console.log('toggle', checked)
    }, [checked])
    return (
        <label className={'toggle'}>
            <input type="checkbox" onChange={handleChecked} checked={checked} />
            <span />
        </label>
    )
}
export default Toggle
