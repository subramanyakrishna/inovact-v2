import React from 'react'
import LeftTop from 'components/application/components/feed/components/leftnav/LeftTop'
import LeftBottom from 'components/application/components/feed/components/leftnav/LeftBottom'

const LeftNavBar = (props: any) => {
    return (
        <div>
            <LeftTop />
            <LeftBottom openCreateTeam={props.openCreateTeam} />
        </div>
    )
}
export default LeftNavBar
