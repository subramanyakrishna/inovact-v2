import React from 'react'
import PercentageGrowth from './PercentageGrowth';
import ConnectMessageBtn from 'components/application/components/otheruserprofile/components/LeftProfileContent/Components/ConnectMessageBtn';

function DashboardContent() {
    return (
        <div className="dashboard-main">
            <p className="dashboard-main-title">Dashboard</p>
            <div className="dashboard-main-content">
                <div>
                    <span className="dashboard-main-content-number">12</span>
                    <span className="dashboard-main-content-description">Posts</span>
                </div>
                <div>
                    <span className="dashboard-main-content-number">540</span>
                    <span className="dashboard-main-content-description">
                    Connections
                    </span>
                </div>
                <div>
                    <span className="dashboard-main-content-number">50</span>
                    <span className="dashboard-main-content-description">Requests</span>
                </div>
                
            </div>
            <div>
                <PercentageGrowth/>
                <ConnectMessageBtn/>
            </div>
        </div>
    )
}

export default DashboardContent;
