import axios from 'axios'
import { makeApiCall } from 'components/application/components/connections/components/connectionsUtils'
import SmallSpinner from 'components/application/SmallSpinner'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
} from 'mdb-react-ui-kit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { handlePeopleYouMayKnow } from 'StateUpdateHelper'

const RightTop = (props: any) => {
    const peopleToKnow = useSelector(
        (state: any) => state.peopleYouMayKnow
    ).slice(0, 4)
    const peopleYouMayKnow = useSelector((state: any) => state.peopleYouMayKnow)
    const dispatch = useDispatch()
    const handleConnect = async (id: number) => {
        const filteredpeopleYouMayKnow = peopleYouMayKnow.filter(
            (user: any) => user.user_id != id
        )

        handlePeopleYouMayKnow('pymk_update_all', filteredpeopleYouMayKnow)

        const res = await makeApiCall(
            'post',
            `connections/request?user_id=${id}`
        )
    }
    const [otherUserId, setOtherUserId] = useState(0)

    const history = useHistory()
    const getTheOtherUser = async (userId: any) => {
        console.log('the user id is of other: ', userId)
        setImageLoading(true)
        localStorage.setItem('other-user', userId)
        history.push('/app/otherprofile')
        // await axios({
        //     method: "get",
        //     url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user?id=${userId}`,
        //     headers: {
        //         "Authorization": localStorage.getItem("user"),
        //     }

        // }).then((resp: any)=>{
        //     console.log(resp.data.data.user[0]);
        //     handleOtherUserInfoChange("other-user-update",resp.data.data.user[0]);
        // }).then(()=>{
        //     history.push("/app/otherprofile");
        // }).catch((err)=>{
        //     console.log(err);
        // })
    }
    const [imageLoading, setImageLoading] = useState(false)
    return (
        <div className="left-right-nav">
            <MDBCard className="left-right-nav__card">
                <MDBCardHeader>
                    <MDBCardTitle className="text-style--bold text-align--center">
                        People you may know
                    </MDBCardTitle>
                    <p className="text-style--italic text-align--center text-color--green text-size--small">
                        Based on your recent connections
                    </p>
                </MDBCardHeader>
                <MDBCardBody className="left-right-nav__card__body">
                    <MDBListGroup flush className="left-right-nav__card__list">
                        {peopleToKnow.length > 0 ? (
                            peopleToKnow.map(
                                (
                                    { name, designation, user_id, image }: any,
                                    index: any
                                ) => {
                                    return (
                                        <MDBListGroupItem
                                            key={index}
                                            className="left-right-nav__card__list__item--right left-right-nav__card__list__item__rightTop"
                                        >
                                            <div
                                                className="left-right-nav__card__list__item__rightTop--row"
                                                onClick={getTheOtherUser.bind(
                                                    null,
                                                    user_id
                                                )}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {imageLoading ? (
                                                    <SmallSpinner />
                                                ) : (
                                                    <img
                                                        src={image}
                                                        alt="conn"
                                                    />
                                                )}
                                                <div className="left-right-nav__card__list__item__info">
                                                    <h2 className="text-style--bold text-align--left text-size--big">
                                                        {name}{' '}
                                                    </h2>
                                                    <h6 className="text-style--light text-align--left">
                                                        {designation}
                                                    </h6>
                                                    {/* <p className="text-style--italic text-align--left text-size--small text-color--gray">
                        connection1, +23 others
                      </p> */}
                                                </div>
                                            </div>
                                            <div className="left-right-nav__card__list__item__button__box">
                                                <button
                                                    className="left-right-nav__card__list__item__button"
                                                    onClick={() =>
                                                        handleConnect(user_id)
                                                    }
                                                >
                                                    Connect
                                                </button>
                                            </div>
                                        </MDBListGroupItem>
                                    )
                                }
                            )
                        ) : (
                            <SmallSpinner />
                        )}
                    </MDBListGroup>
                </MDBCardBody>
                <MDBCardFooter className="left-right-nav__card__footer ">
                    <a
                        href="/connections"
                        className="text-style--bold text-align--center"
                    >
                        View All
                    </a>
                </MDBCardFooter>
            </MDBCard>
        </div>
    )
}
export default RightTop
