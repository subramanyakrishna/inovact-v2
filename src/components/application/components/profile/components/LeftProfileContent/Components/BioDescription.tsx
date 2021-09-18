import React, {useState} from 'react'

function BioDescription() {
    const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
      <div className="dashboard-main">
            <div className="bio">
      <p className="bio-heading">Bio</p>
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

      <div className="bio-email-link">
        <div className="bio-email-link-email">
          {/* <MailIcon /> */}
          <span>mattleevolupat3241@gmail.com</span>
        </div>
        <div className="bio-email-link-link">
          {/* <LanguageIcon /> */}
          <span>www.reasearchgate.com</span>
        </div>
      </div>
    </div>
      </div>
    
  );
}

export default BioDescription;
