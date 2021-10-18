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
import { useSelector } from 'react-redux'

// interface MyTeams {
//     name: string
//     image: string
//     members: number
// }

const LeftBottom = (props: any) => {
    const allTeams = useSelector((state: any) => state.teams.teams)

    console.log('allteams', allTeams)
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
                        <MDBListGroupItem className="left-right-nav__card__list__item--create">
                            <img
                                src={create}
                                alt="create"
                                onClick={props.openCreateTeam}
                            />
                            <div className="left-right-nav__card__list__item__info">
                                <h6>
                                    <a href="/createteam" className="title">
                                        Create New Team{' '}
                                    </a>
                                </h6>
                            </div>
                        </MDBListGroupItem>
                        {allTeams &&
                            allTeams.map((team: any, index: number) => {
                                return (
                                    <MDBListGroupItem className="left-right-nav__card__list__item">
                                        {/* <img src={image} alt={name} /> */}
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
