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

const LeftBottom = (props: any) => {
    const allTeams = useSelector((state: any) => state.teams.teams)

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
                        <MDBListGroupItem className="left-right-nav__card__list__item--create"  onClick={props.openCreateTeam}>
                            <img
                                src={create}   
                                alt="create"
                               
                            />
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
                                    <MDBListGroupItem className="left-right-nav__card__list__item">
                                        <img src={team.avatar!==""?team.avatar:"https://www.wallstreetpanel.com/wp-content/plugins/profilegrid-user-profiles-groups-and-communities/public/partials/images/default-group.jpg"} alt="img" />
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
                    <a
                        href="/"
                        className="text-style--bold text-align--center text-color--white"
                    >
                        View All
                    </a>
                </MDBCardFooter>
            </MDBCard>
        </div>
    )
}
export default LeftBottom
