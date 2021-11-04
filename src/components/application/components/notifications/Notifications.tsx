import Spinner from 'components/application/Spinner'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import makeApiCall from '../settings/makeApiCall'
import NotificationTag from './NotificationTag'

function Notifications() {
    const [allNotisfication, setAllNotisfication] = useState<any>({})
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const [allnotisfication, setallnotisfication] = useState<any>({})

    const getRemovedCurrentUserFromLikeProperty = (
        notif: any,
        like_type: string,
        ownId: number
    ) => {
        let likes = notif[like_type]
        let likesWithoutCurrUser = likes.filter(
            (like: any) => like.user.id !== ownId
        )
        return likesWithoutCurrUser
    }

    const getNotificationTypePropertyAdded = (allnotifications: any) => {
        let newNotisfications: any = []
        ;[
            'connectionsByUser2',
            'ideas',
            'projects',
            'team_invitations',
            'thoughts',
        ].forEach((notif_type: string) => {
            newNotisfications[notif_type] = allnotifications[notif_type].map(
                (notif: any) => ({ type: notif_type, ...notif })
            )
        })
        return newNotisfications
    }

    const getRemovedCurrentUserNotifications = (
        post_notifs: any,
        post_type: string
    ) => {
        let like_type: any = { projects: 'project_likes', ideas: 'idea_likes' }
        let newPostNotifs: any = []
        post_notifs.forEach((notif: any) => {
            let post_notifs_without_curruser =
                getRemovedCurrentUserFromLikeProperty(
                    notif,
                    like_type[post_type],
                    ownId
                )
            if (post_notifs_without_curruser.length !== 0) {
                newPostNotifs.push({
                    ...notif,
                    project_likes: post_notifs_without_curruser,
                })
            }
        })
        return newPostNotifs
    }

    const ownId = useSelector((state: any) => state.userInfo.id)
    useEffect(() => {
        ;(async () => {
            try {
                const res = await makeApiCall('get', 'notifications')
                var responseWihtoutRemovingCurrentUser = res.data.data.user[0]

                responseWihtoutRemovingCurrentUser['projects'] =
                    getRemovedCurrentUserNotifications(
                        responseWihtoutRemovingCurrentUser['projects'],
                        'projects'
                    )
                responseWihtoutRemovingCurrentUser['ideas'] =
                    getRemovedCurrentUserNotifications(
                        responseWihtoutRemovingCurrentUser['ideas'],
                        'ideas'
                    )
                setAllNotisfication(responseWihtoutRemovingCurrentUser)
                console.log(responseWihtoutRemovingCurrentUser)
                let filteredAllNotisfications =
                    getNotificationTypePropertyAdded(
                        responseWihtoutRemovingCurrentUser
                    )
                console.log(
                    'responseWihtoutRemovingCurrentUser',
                    responseWihtoutRemovingCurrentUser
                )
                console.log(
                    'filteredAllNotisfications',
                    filteredAllNotisfications
                )
                setallnotisfication([
                    ...filteredAllNotisfications['connectionsByUser2'],
                    ...filteredAllNotisfications['ideas'],
                    ...filteredAllNotisfications['projects'],
                    ...filteredAllNotisfications['team_invitations'],
                    ...filteredAllNotisfications['thoughts'],
                ])
                setIsLoad(false)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [])

    return (
        <div className="notifications-main">
            {isLoad && <Spinner />}
            {/* {!isLoad &&
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
                })} */}
            {!isLoad &&
                allnotisfication.map((notisfication: any) => {
                    return (
                        <NotificationTag
                            key={Math.round(Math.random() * 10000)}
                            notisfication={notisfication}
                            notisfication_type={notisfication.type}
                            ownId={ownId}
                        />
                    )
                })}
        </div>
    )
}

export default Notifications
