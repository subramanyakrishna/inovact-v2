import React from 'react'
import RequestProfile from './RequestProfile'
import ConnectionProfile from './ConnectionProfile'

import Spinner from '../../../Spinner'

function CenterRequests({
    removeConnection,
    rejectConnectRequest,
    acceptConnectRequest,
    handleConnectionButton,
    handleRequestButton,
    myConnectionsLoad,
    pendingRequests,
    showConnection,
    showRequest,
    pendingRequesLoad,
    myConnections,
    handleRemoveConnection,
}: any) {
    return (
        <div className="requests-connections">
            <div className="requests-connections-btn">
                <button
                    onClick={handleRequestButton}
                    style={{
                        borderBottom: showRequest
                            ? '5px solid #5579BD'
                            : 'none',
                    }}
                >
                    Requests ({pendingRequests.length})
                </button>
                <button
                    onClick={handleConnectionButton}
                    style={{
                        borderBottom: showConnection
                            ? '5px solid #5579BD'
                            : 'none',
                    }}
                >
                    My Connections ({myConnections.length})
                </button>
            </div>
            {showRequest && (
                <div className="requests-connections-profiles">
                    <div>
                        {pendingRequesLoad ? (
                            <Spinner />
                        ) : pendingRequests.length == 0 ? (
                            <span
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10rem',
                                }}
                            >
                                Your pending requests will be shown here{' '}
                            </span>
                        ) : (
                            pendingRequests.map((user: any) => (
                                <RequestProfile
                                    key={user.id}
                                    user={user}
                                    acceptConnectRequest={acceptConnectRequest}
                                    rejectConnectRequest={rejectConnectRequest}
                                />
                            ))
                        )}
                    </div>
                </div>
            )}
            {showConnection && (
                <div className="requests-connections-profiles">
                    <div>
                        {myConnectionsLoad ? (
                            <Spinner />
                        ) : myConnections.length == 0 ? (
                            <span
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10rem',
                                }}
                            >
                                Your connections will be shown here{' '}
                            </span>
                        ) : (
                            myConnections.map((user: any, i: number) => (
                                <ConnectionProfile
                                    key={i}
                                    user={user}
                                    handleRemoveConnection={
                                        handleRemoveConnection
                                    }
                                />
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CenterRequests
