import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter
  } from "mdb-react-ui-kit";
  interface Teams {
    name: string;
  }
  export const teams: Teams[] = [
    {
      name: "Web Development-Frontend"
    },
    {
      name: "Data Mining "
    },
    {
      name: "Design Thinkers"
    }
  ];
  
  const RightBottom = () => {
    return (
      <div className="left-right-nav">
        <MDBCard className="left-right-nav__card">
          <MDBCardHeader className="left-right-nav__card__header">
            <MDBCardTitle className="heading">
              Teams that may interest you
            </MDBCardTitle>
            <p className="sub-title--green">
              Based on your interest and recent projects
            </p>
          </MDBCardHeader>

          <MDBCardBody className="left-right-nav__card__body">
            <MDBListGroup flush className="left-right-nav__card__list">
              {teams.map(({ name }, index) => {
                return (
                  <MDBListGroupItem className="left-right-nav__card__list__item">
                    <div className="left-right-nav__card__list__item__info--newteams">
                      <h2 className="title">{name} </h2>
                      <p className="muted--italic">Javascript,REACT, +3more</p>
                    </div>

                    <button className="left-right-nav__card__list__item__button">
                      Join
                    </button>
                  </MDBListGroupItem>
                );
              })}
            </MDBListGroup>
          </MDBCardBody>

          <MDBCardFooter className="left-right-nav__card__footer ">
            <a href="/" className="title--bold">
              View All
            </a>
          </MDBCardFooter>

        </MDBCard>
      </div>
    );
  };
  export default RightBottom;
  