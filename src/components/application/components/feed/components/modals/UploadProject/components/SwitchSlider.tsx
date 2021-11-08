import { Switch, withStyles } from '@material-ui/core'
import React, { useState } from 'react'

function SwitchSlider(props: any) {
    const [checked, setChecked] = useState(false)
    const toggleChecked = () => {
        setChecked(!checked)
        props.projectCompletion && props.projectCompletion()
    }
    const GreenSwitch = withStyles({
        switchBase: {
            color: '#02BD63',
            '&$checked': {
                color: '#02BD63',
            },
            '&$checked + $track': {
                backgroundColor: '#02BD63',
            },
        },
        checked: {},
        track: {},
    })(Switch)
    return (
        <div>
            <GreenSwitch checked={checked} onClick={toggleChecked} />
        </div>
    )
}

export default SwitchSlider
