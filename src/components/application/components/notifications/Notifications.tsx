import Spinner from 'components/application/Spinner'
import React, { useEffect, useState } from 'react'
import makeApiCall from '../settings/makeApiCall'
import NotificationTag from './NotificationTag'

function Notifications() {
    const [allNotisfication, setAllNotisfication] = useState<any>({})
    const [isLoad, setIsLoad] = useState<boolean>(true)
    useEffect(() => {
        ;(async () => {
            try {
                const res = await makeApiCall('get', 'notifications')
                setAllNotisfication(res.data.data.user[0])
                setIsLoad(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])
    return (
        <div className="notifications-main">
            {isLoad && <Spinner />}
            {!isLoad &&
                [
                    'connectionsByUser2',
                    'ideas',
                    'projects',
                    'team_invitations',
                    'thoughts',
                ].map((notisfication_type: string) => {
                    const eachNotification =
                        allNotisfication[notisfication_type]
                    if (eachNotification) {
                        return eachNotification.map((notisfication: any) => {
                            return (
                                <NotificationTag
                                    key={Math.round(Math.random() * 10000)}
                                    notisfication={notisfication}
                                    notisfication_type={notisfication_type}
                                />
                            )
                        })
                    }
                })}
        </div>
    )
}

export default Notifications
