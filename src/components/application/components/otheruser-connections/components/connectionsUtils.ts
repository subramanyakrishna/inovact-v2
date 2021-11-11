import axios from 'axios'

const findTimeDiffString = (connectedDateString: string) => {
    const ONE_SECONDS_IN_MS = 1000
    const ONE_MINUTE = ONE_SECONDS_IN_MS * 60
    const ONE_HOUR = ONE_MINUTE * 60
    const ONE_DAY = ONE_HOUR * 24
    const ONE_MONTH = ONE_DAY * 30
    const ONE_YEAR = ONE_MONTH * 12

    const todaysDate = new Date().getTime()
    const connectedDate = new Date(connectedDateString).getTime()
    const time_difference_in_ms = Math.abs(todaysDate - connectedDate)

    const years = Math.round(time_difference_in_ms / ONE_YEAR)
    const months = Math.round(time_difference_in_ms / ONE_MONTH)
    const days = Math.round(time_difference_in_ms / ONE_DAY)
    const hours = Math.round(time_difference_in_ms / ONE_HOUR) - 1
    const minutes = Math.round(time_difference_in_ms / ONE_MINUTE)

    if (years) return `${years} year`
    if (months) return `${months} months`
    if (days) return `${days} day`
    if (hours) return `${hours} hour`

    return `${minutes} minute`
}

const getFilteredPendingRequestsAndConnectedAccount = (
    allConnectionsFromApi: any,
    ownId: number
) => {
    let filteredPendingRequest: any = []
    let filteredConnectedAccount: any = []
    let filteredConnectReqAcceptPending: any = []
    allConnectionsFromApi.forEach((connection: any) => {
        const otherUser =
            connection.user1 === ownId
                ? connection['userByUser2']
                : connection['user']
        const otherUserDisplayData = {
            id: otherUser.id,
            name: `${otherUser.first_name} ${otherUser.last_name}`,
            avatar: otherUser.avatar,
            designation: 'inovact', //otherUser.designation,
            connected_at: connection.created_at,
            connected_at_in_words: findTimeDiffString(connection.created_at),
        }
        if (otherUser.id !== ownId) {
            //user1 is connection sender user2 is receiver
            if (connection.status === 'pending' && connection.user2 === ownId) {
                filteredPendingRequest.push(otherUserDisplayData)
            } else if (
                connection.status === 'pending' &&
                connection.user1 === ownId
            ) {
                filteredConnectReqAcceptPending.push(otherUserDisplayData)
            } else {
                filteredConnectedAccount.push(otherUserDisplayData)
            }
        }
    })
    const ascendingOrderTimeSortCallback = (
        connection1: any,
        connection2: any
    ) => {
        const connection1Date: Date = new Date(connection1.created_at)
        const connection2Date: Date = new Date(connection2.created_at)
        return connection2Date === connection1Date
            ? 0
            : connection2Date > connection1Date
            ? -1
            : 1
    }
    filteredPendingRequest = filteredPendingRequest.reverse()
    filteredConnectedAccount = filteredConnectedAccount.reverse()
    filteredConnectReqAcceptPending = filteredConnectReqAcceptPending.reverse()
    return {
        filteredPendingRequest,
        filteredConnectedAccount,
        filteredConnectReqAcceptPending,
    }
}
const makeApiCall = async (method: any, route: string) => {
    const response = await axios({
        method: method,
        url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/${route}`,
        headers: {
            Authorization: localStorage.getItem('user'),
            'Content-Type': 'application/json',
        },
    })
    return response
}

export {
    getFilteredPendingRequestsAndConnectedAccount,
    findTimeDiffString,
    makeApiCall,
}
