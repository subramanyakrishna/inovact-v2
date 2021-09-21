import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem
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
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
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
    },
    {
      name: "Jane Doe",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      designation: "Designation",
      duration: "10 min"
    }
  ];
  
const LeftTop = () => {
    return (
      <div className="left-right-nav">
        <MDBCard className="left-right-nav__card">
          <MDBCardHeader>
            <MDBCardTitle className="text-style--bold text-align--center">Recent Connections</MDBCardTitle>
          </MDBCardHeader>
          
          <MDBCardBody className="left-right-nav__card__body">
            <MDBListGroup flush className="left-right-nav__card__list">
              {connection.map(({ name, image, designation, duration }, index) => {
                return (
                  <MDBListGroupItem className="left-right-nav__card__list__item">
                    <img src={image} alt={name} />
                    <div className="left-right-nav__card__list__item__info">
                      <h2 className="text-style--bold text-align--left text-size--big">{name} </h2>
                      <h6 className="text-style--light text-align--left">{designation}</h6>
                      <p className="text-style--italic text-color--gray text-align--left text-size--small">Connected {duration} ago</p>
                    </div>
                  </MDBListGroupItem>
                );
              })}
            </MDBListGroup>
          </MDBCardBody>
        </MDBCard>
      </div>
    );
  };
  export default LeftTop;
  