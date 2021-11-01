import { getConnectionsAllData } from 'components/application/components/connections/components/connectionsUtils'
import SmallSpinner from 'components/application/SmallSpinner'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateConnectedAccountId } from 'redux/actions/connectionsAction'

function ConnectMessageBtn() {
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [isConnectedShow, setIsConnectedShow] = useState<boolean>()
    const connected_account_ids = useSelector(
        (state: any) => state.connections.connected_account_ids
    )
    const dispatch = useDispatch()
    const user_id = useSelector((state: any) => state.userInfo.id)
    useEffect(() => {
        if (connected_account_ids.length === 0) {
            ;(async () => {
                const { filteredConnectionId } = await getConnectionsAllData(
                    user_id
                )
                dispatch(updateConnectedAccountId(filteredConnectionId))
                setIsLoad(false)

                const other_user_id = Number(localStorage.getItem('other-user'))

                setIsConnectedShow(
                    filteredConnectionId.indexOf(other_user_id) !== -1
                )
            })()
        }
    }, [])
    return (
        <div className="connect-message">
            <button className="connect-message-connectbtn">
                {isLoad && <SmallSpinner />}
                {!isLoad && isConnectedShow && 'Connected'}
                {!isLoad && !isConnectedShow && 'Connect'}
            </button>
            <button className="connect-message-messagebtn">Message</button>
        </div>
    )
}

export default ConnectMessageBtn
