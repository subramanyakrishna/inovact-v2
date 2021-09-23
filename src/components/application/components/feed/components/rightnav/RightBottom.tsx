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
      name: "Design Thinkers UI/UX"
    }
  ];
  
  const RightBottom = () => {
    return (
      <div className="left-right-nav">
        <MDBCard className="left-right-nav__card">
          <MDBCardHeader style={{paddingLeft:'15px'}} >
            <MDBCardTitle  className="text-style--bold text-align--center">
              Teams that may interest you
            </MDBCardTitle>
            <p className="text-style--italic text-align--center text-color--green text-size--small">
              Based on your interest and recent projects
            </p>
          </MDBCardHeader>

          <MDBCardBody className="left-right-nav__card__body">
            <MDBListGroup flush className="left-right-nav__card__list">
              {teams.map(({ name }, index) => {
                return (
                  <MDBListGroupItem className="left-right-nav__card__list__item--right">
                    <div className="left-right-nav__card__list__item__info">
                      <h2 className="text-style--bold text-align--left text-size--big">{name} </h2>
                      <p className="text-style--italic text-align--left  text-color--gray">Javascript,REACT, +3more</p>
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
            <a href="/" className="text-style--bold text-align--center">
              View All
            </a>
          </MDBCardFooter>

        </MDBCard>
      </div>
    );
  };
  export default RightBottom;
  