import React from 'react'
import PercentageGrowth from './PercentageGrowth'
import ConnectMessageBtn from 'components/application/components/otheruserprofile/components/LeftProfileContent/Components/ConnectMessageBtn'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'

function DashboardContent(props: any) {
    const history = useHistory()
    const otherUserId = useSelector((state: any) => state.otherUser.id)
    const connectedAccountsId = useSelector(
        (state: any) => state.connections.connected_account_ids
    )
    return (
        <div className="dashboard-main">
            <p className="dashboard-main-title">Dashboard</p>
            <div className="dashboard-main-content">
                <div>
                    <span className="dashboard-main-content-number">
                        {props.postsCount}
                    </span>
                    <span className="dashboard-main-content-description">
                        Posts
                    </span>
                </div>
                <div
                    onClick={() => {
                        history.push('/app/otheruser-connections')
                    }}
                >
                    <span className="dashboard-main-content-number">
                        {props.connectionsCount}
                    </span>
                    <span className="dashboard-main-content-description">
                        Connections
                    </span>
                </div>
                {/* <div>
                    <span className="dashboard-main-content-number">50</span>
                    <span className="dashboard-main-content-description">Requests</span>
                </div> */}
            </div>
            <div>
                {!connectedAccountsId?.includes(otherUserId) && (
                    <ConnectMessageBtn />
                )}
                <PercentageGrowth />
            </div>
        </div>
    )
}

export default DashboardContent
