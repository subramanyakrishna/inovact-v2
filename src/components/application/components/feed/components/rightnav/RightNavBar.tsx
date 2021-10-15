import React from 'react'
import RightTop from 'components/application/components/feed/components/rightnav/RightTop'
import RightBottom from 'components/application/components/feed/components/rightnav/RightBottom'
const RightNavBar = (props: any) => {
    return (
        <div>
            <RightTop peopleToKnow={props.peopleToKnow}/>
            <RightBottom />
        </div>
    )
}
export default RightNavBar
