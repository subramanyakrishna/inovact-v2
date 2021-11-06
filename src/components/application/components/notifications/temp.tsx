import { makeApiCall } from '../connections/components/connectionsUtils'

const acceptConnectRequest = async (id: number) => {
    const response = await makeApiCall(
        'post',
        `connections/accept?user_id=${id}`
    )
}

const rejectConnectRequest = async (id: number) => {
    const response = await makeApiCall(
        'post',
        `connections/reject?user_id=${id}`
    )
}
const acceptTeamInvitation = async (id: number) => {
    const response = await makeApiCall('post', `team/invite/accept`, {
        invitation_id: id,
    })
    console.log(response)
}
const rejectTeamInvitation = async (id: number) => {
    const response = await makeApiCall('post', `team/invite/reject`, {
        invitation_id: id,
    })
    console.log(response)
}
