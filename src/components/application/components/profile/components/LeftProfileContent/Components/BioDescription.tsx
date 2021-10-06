import React, {useState} from 'react';
import MailRounded from "@material-ui/icons/MailRounded";
import LanguageRounded from "@material-ui/icons/LanguageRounded";
import EditIcon from "@material-ui/icons/Edit";
function BioDescription(props:any) {
    const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
      <div className="dashboard-main">
            <div className="bio">
      <div className="bio-heading">
        <p>Bio</p>
        <EditIcon onClick={props.viewEditBio}/>
      </div>        
      {
        props.userData.bio.length>=230 && 
        <div>
          {!showMore && (
            <p className="bio-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat...
              <span onClick={toggleReadMore}>Read More</span>
            </p>
          )}
          {showMore && (
            <p className="bio-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              <span onClick={toggleReadMore}>Read less</span>
            </p>
          )}
        </div>
      }
      {
        props.userData.bio.length<230 &&
        <div>
          <p className="bio-description">
              {props.userData.bio}
            </p>
        </div>
      }
      

      <div className="bio-email-link">
        <div className="bio-email-link-email">
          <MailRounded style={{color: "#02bd63"}}/>
          <span>{props.userData.email_id}</span>
        </div>
        <div className="bio-email-link-link">
          <LanguageRounded style={{color: "#02bd63"}}/>
          <span>{props.userData.website? props.userData.website: "No Field Yet..."}</span>
        </div>
      </div>
    </div>
      </div>
    
  );
}

export default BioDescription;
