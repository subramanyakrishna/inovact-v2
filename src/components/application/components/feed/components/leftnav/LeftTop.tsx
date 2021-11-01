import {
    getFilteredPendingRequestsAndConnectedAccount,
    makeApiCall,
} from 'components/application/components/connections/components/connectionsUtils'
import SmallSpinner from 'components/application/SmallSpinner'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
} from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateMyConnections } from 'redux/actions/connectionsAction'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'

interface Connection {
    name: string
    image: string
    designation: string
    duration: string
}

const LeftTop = () => {
    const [isLoad, setIsLoad] = useState<boolean>(true)
    const dispatch = useDispatch()
    const myConnections = useSelector((state: any) =>
        state.connections.my_connections.slice(0.4)
    )

    useEffect(() => {
        console.log(myConnections)
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
            setIsLoad(false)
            dispatch(updateMyConnections(filteredConnectedAccount))
            console.log("myConnections",myConnections)
        })()
    }, [])
    const history = useHistory();

    const getTheOtherUser = async (userId: any) => {
        console.log('the user id is of other: ', userId)
        localStorage.setItem('other-user', userId)
        history.push('/app/otherprofile')
 
    }
    
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
                        {isLoad && <SmallSpinner />}
                        {!isLoad && myConnections.length === 0 && (
                            <span>No Recent Connections</span>
                        )}
                        {!isLoad &&
                            myConnections.length !== 0 &&
                            myConnections.map((user: any) => {
                                return (
                                    <MDBListGroupItem
                                        className="left-right-nav__card__list__item"
                                        key={user.id}
                                        onClick={getTheOtherUser.bind(
                                            null,
                                            user.id
                                        )}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                        />
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
