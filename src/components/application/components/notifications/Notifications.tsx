import Spinner from 'components/application/Spinner'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import makeApiCall from '../settings/makeApiCall'
import NotificationTag from './NotificationTag'

function Notifications() {
    const [allNotisfication, setAllNotisfication] = useState<any>({})
    const [isLoad, setIsLoad] = useState<boolean>(true)

    const ownId = useSelector((state: any) => state.userInfo.id)
    useEffect(() => {
        ;(async () => {
            try {
                const res = await makeApiCall('get', 'notifications')
                var responseWihtoutRemovingCurrentUser = res.data.data.user[0]
                var project_notifs =
                    responseWihtoutRemovingCurrentUser['projects']
                let newProjectNotif: any = []
                project_notifs.forEach((notif: any) => {
                    let project_likes = notif.project_likes
                    let project_likes_without_curruser = project_likes.filter(
                        (like: any) => like.user.id !== ownId
                    )
                    console.log(
                        'project_likes_without_curruser',
                        project_likes_without_curruser
                    )
                    console.log('ownId', ownId)
                    if (project_likes_without_curruser.length !== 0) {
                        newProjectNotif.push({
                            ...notif,
                            project_likes: project_likes_without_curruser,
                        })
                    }
                })
                responseWihtoutRemovingCurrentUser['projects'] = newProjectNotif
                setAllNotisfication(responseWihtoutRemovingCurrentUser)
                console.log(responseWihtoutRemovingCurrentUser)

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
                                    ownId={ownId}
                                />
                            )
                        })
                    }
                })}
        </div>
    )
}

export default Notifications
