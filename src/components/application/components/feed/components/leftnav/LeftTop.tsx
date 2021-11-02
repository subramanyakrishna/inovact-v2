import {
    getConnectionsAllData,
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

interface Connection {
    name: string
    image: string
    designation: string
    duration: string
}

const LeftTop = () => {
    const user_id = useSelector((state: any) => state.userInfo.id)

    const [isLoad, setIsLoad] = useState<boolean>(true)
    const dispatch = useDispatch()
    const myConnections = useSelector((state: any) =>
        state.connections.my_connections.slice(0.4)
    )

    useEffect(() => {
        console.log(myConnections)
        ;(async () => {
            const { filteredConnectedAccount } = await getConnectionsAllData(
                user_id
            )

            setIsLoad(false)
            dispatch(updateMyConnections(filteredConnectedAccount))
            console.log('myConnections', myConnections)
        })()
    }, [])
    const history = useHistory()

    const getTheOtherUser = async (userId: any) => {
        console.log('LeftTop the user id is of other: ', userId)
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
                            <span className="text-align--center">
                                No Recent Connections
                            </span>
                        )}
                        {!isLoad &&
                            myConnections.length !== 0 &&
                            myConnections.map((user: any) => {
                                return (
                                    <MDBListGroupItem
                                        className="left-right-nav__card__list__item"
                                        key={user.id}
                                        onClick={() => getTheOtherUser(user.id)}
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
