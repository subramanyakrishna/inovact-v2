import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter
  } from "mdb-react-ui-kit";
  interface Connection {
    name: string;
    image: string;
    designation: string;
    duration: string;
  }
  
  export const connection: Connection[] = [
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      designation: "Designation",
      duration: "10 min"
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      designation: "Designation",
      duration: "10 min"
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      designation: "Designation",
      duration: "10 min"
    }
  ];
  
  const RightTop = () => {
    return (
      <div className="left-right-nav">
        <MDBCard className="left-right-nav__card">
          <MDBCardHeader>
            <MDBCardTitle className="heading">People you may know</MDBCardTitle>
            <p className="sub-title--green">Based on your recent connections</p>
          </MDBCardHeader>
          <MDBCardBody className="left-right-nav__card__body">
            <MDBListGroup flush className="left-right-nav__card__list">
              {connection.map(({ name, designation }, index) => {
                return (
                  <MDBListGroupItem className="left-right-nav__card__list__item--right left-right-nav__card__list__item__rightTop">
                    <div className="left-right-nav__card__list__item__rightTop--row">
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        alt="conn"
                      />
  
                      <div className="left-right-nav__card__list__item__info">
                        <h2 className="title">{name} </h2>
                        <h6 className="sub-title">{designation}</h6>
                        <p className="muted--italic">
                          connection1,
                        +23 others
                        </p>
                      </div>
                    </div>
  
                    <button className="left-right-nav__card__list__item__button">
                      Connect
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
  export default RightTop;
  