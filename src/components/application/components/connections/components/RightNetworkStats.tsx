<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
>>>>>>> 4f9cf70ed9bcd9af5b3cfc88b956484e32177c3e
import { useSelector } from 'react-redux'

function RightNetworkStats() {
    const userInfo = useSelector((state: any) => state.userInfo)
    const [totalConnections, setTotalConnections] = useState<number>(0)
    const totalConnectionsFromStore = useSelector(
        (state: any) => state.connections.my_connections.length
    )
    console.log()
    useEffect(() => {
        setTotalConnections(totalConnectionsFromStore)
    }, [totalConnectionsFromStore])

    console.log('totalConnections', totalConnections)
    return (
        <div className="right-network-stats">
            <div className="right-network-stats--img-container">
                <img
                    src={userInfo.avatar}
                    className="right-network-stats--img"
                />
                <span>{userInfo.first_name + ' ' + userInfo.last_name}</span>
                <h5>Your Network Stats</h5>
            </div>
            <div className="right-network-stats--content">
                <div className="right-network-stats--content-titles">
                    <p>
                        <span>Total connections</span>
                        <span>{totalConnectionsFromStore}</span>
                    </p>
                    <p>
                        <span>Last week's connections</span>
                        <span>18</span>
                    </p>
                    <p>
                        <span>Your mentors</span>
                        <span>4</span>
                    </p>
                    <p>
                        <span>Appearances in People you may know</span>
                        <span>26</span>
                    </p>
                    <p>
                        <span>Percentage Growth</span>
                        <span style={{ color: '#07d400' }}>+3.95%</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RightNetworkStats
