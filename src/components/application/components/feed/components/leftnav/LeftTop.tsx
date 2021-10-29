import {
    getFilteredPendingRequestsAndConnectedAccount,
    makeApiCall,
} from 'components/application/components/connections/components/connectionsUtils'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdb-react-ui-kit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateMyConnections } from 'redux/actions/connectionsAction'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'

interface Connection {
    name: string
    image: string
    designation: string
    duration: string
}
export const connection: Connection[] = [
    {
        name: 'Jane Doe',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        designation: 'Designation',
        duration: '10 min',
    },
]

const LeftTop = () => {
    const dispatch = useDispatch()
    const myConnections = useSelector(
        (state: any) => state.connections.my_connections
    )
    useEffect(() => {
        ;(async () => {
            const response = await makeApiCall('get', 'user')

            dispatch({
                type: userInfoConstants.UPDATE_WHOLE_PROFILE,
                payload: response.data.data.user[0],
            })
            const { id: ownId } = response.data.data.user[0]
            const dataFromConnectionApi = await makeApiCall(
                'get',
                'connections'
            )

            const {
                filteredPendingRequest,
                filteredConnectedAccount,
                filteredConnectReqAcceptPending,
            } = getFilteredPendingRequestsAndConnectedAccount(
                dataFromConnectionApi.data.data.connections,
                ownId
            )

            dispatch(updateMyConnections(filteredConnectedAccount))
        })()
    }, [])
    return (
        <div className="left-right-nav">
            <MDBCard className="left-right-nav__card">
                <MDBCardHeader>
                    <MDBCardTitle className="text-style--bold text-align--center">
                        Recent Connections
                    </MDBCardTitle>
                </MDBCardHeader>

                <MDBCardBody className="left-right-nav__card__body">
                    <MDBListGroup flush className="left-right-nav__card__list">
                        {myConnections.map((user: any) => {
                            return (
                                <MDBListGroupItem className="left-right-nav__card__list__item">
                                    <img src={user.avatar} alt={user.name} />
                                    <div className="left-right-nav__card__list__item__info">
                                        <h2 className="text-style--bold text-align--left text-size--big">
                                            {user.name}{' '}
                                        </h2>
                                        <h6 className="text-style--light text-align--left">
                                            {user.designation}
                                        </h6>
                                        <p className="text-style--italic text-align--left text-size--small text-color--gray">
                                            Connected{' '}
                                            {user.connected_at_in_words} ago
                                        </p>
                                    </div>
                                </MDBListGroupItem>
                            )
                        })}
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
export default LeftTop
