import React from 'react'
import { useSelector } from 'react-redux'
import PercentageGrowth from './PercentageGrowth'
import { useHistory } from 'react-router'

function DashboardContent() {
    const history = useHistory()
    const allPosts = useSelector((state: any) => state.userAllProjects)
    // const userPosts = useSelector((state: any)=>state.userAllPosts);
    //
    const userIdeas = useSelector((state: any) => state.userAllIdeas)
    const userThoughts = useSelector((state: any) => state.userAllThoughts)

    const connections = useSelector((state: any) => state.connections)

    return (
        <div className="dashboard-main">
            <p className="dashboard-main-title">Dashboard</p>
            <div className="dashboard-main-content">
                <div>
                    {allPosts && userIdeas && userThoughts && (
                        <span className="dashboard-main-content-number">
                            {allPosts.length +
                                userIdeas.length +
                                userThoughts.length}{' '}
                        </span>
                    )}

                    <span className="dashboard-main-content-description">
                        Posts
                    </span>
                </div>
                <div
                    onClick={() => {
                        history.push('/app/connections')
                    }}
                >
                    <span className="dashboard-main-content-number">
                        {connections.my_connections.length}
                    </span>
                    <span className="dashboard-main-content-description">
                        Connections
                    </span>
                </div>
                <div
                    onClick={() => {
                        history.push('/app/connections')
                    }}
                >
                    <span className="dashboard-main-content-number">
                        {connections.pending_requests.length}
                    </span>
                    <span className="dashboard-main-content-description">
                        Requests
                    </span>
                </div>
            </div>
            <div>
                <PercentageGrowth />
            </div>
        </div>
    )
}

export default DashboardContent
