import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBCardFooter
  } from "mdb-react-ui-kit";
  import create from "../../../../images/feed/create.svg";
  
  interface MyTeams {
    name: string;
    image: string;
    members: number;
  }
  const myteams: MyTeams[] = [
    {
      name: "Team Name",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      members: 122
    },
    {
      name: "Team Name",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      members: 122
    },
    {
      name: "Team Name",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?    ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      members: 122
    }
  ];
  
  const LeftBottom = () => {
  
    return (
      <div className="left-right-nav">
        <MDBCard className="left-right-nav__card">
          <MDBCardHeader>
            <MDBCardTitle className="heading">My Teams</MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody className="left-right-nav__card__body">
            <MDBListGroup flush className="left-right-nav__card__list">
              <MDBListGroupItem className="left-right-nav__card__list__item--create">
                <img src={create} alt="create" />
                <div className="left-right-nav__card__list__item__info">
                  <h2>
                    <a href="/createteam" className="title">
                      Create New Team{" "}
                    </a>
                  </h2>
                </div>
              </MDBListGroupItem>
              {myteams.map(({ name, image, members }, index) => {
                return (
                  <MDBListGroupItem className="left-right-nav__card__list__item">
                    <img src={image} alt={name} />
                    <div className="left-right-nav__card__list__item__info">
                      <h2 className="title">{name}</h2>
                      <p className="muted--bold">{members} members</p>
                    </div>
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
  export default LeftBottom;
  