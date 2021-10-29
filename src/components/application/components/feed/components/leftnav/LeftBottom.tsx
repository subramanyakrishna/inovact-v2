import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter,
} from 'mdb-react-ui-kit'
import create from 'images/feed/create.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const LeftBottom = (props: any) => {
    const allTeams = useSelector((state: any) => state.teams.teams)
    const history = useHistory()
    return (
        <div className="left-right-nav">
            <MDBCard className="left-right-nav__card">
                <MDBCardHeader>
                    <MDBCardTitle className="text-style--bold text-align--center">
                        My Teams
                    </MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody className="left-right-nav__card__body">
                    <MDBListGroup flush className="left-right-nav__card__list">
                        <MDBListGroupItem
                            className="left-right-nav__card__list__item--create"
                            onClick={props.openCreateTeam}
                        >
                            <img src={create} alt="create" />
                            <div className="left-right-nav__card__list__item__info">
                                <h6>
                                    <div className="title">
                                        Create New Team{' '}
                                    </div>
                                </h6>
                            </div>
                        </MDBListGroupItem>
                        {allTeams &&
                            allTeams.map((team: any, index: number) => {
                                return (
                                    <MDBListGroupItem
                                        className="left-right-nav__card__list__item"
                                        key={index}
                                    >
                                        <img
                                            src={team.avatar}
                                            alt={team.name}
                                        />
                                        <div className="left-right-nav__card__list__item__info">
                                            <h2 className="text-style--bold text-align--left text-size--big">
                                                {team.name}
                                            </h2>
                                            <p className="text-style--bold text-align--left text-color--gray text-size--small">
                                                {/* {members} members */}
                                            </p>
                                        </div>
                                    </MDBListGroupItem>
                                )
                            })}
                    </MDBListGroup>
                </MDBCardBody>
                <MDBCardFooter className="left-right-nav__card__footer ">
                    <div
                        onClick={() => history.push('/app/teams')}
                        className="text-style--bold text-align--center text-color--white"
                    >
                        View All
                    </div>
                </MDBCardFooter>
            </MDBCard>
        </div>
    )
}
export default LeftBottom
