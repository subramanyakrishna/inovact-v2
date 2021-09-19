import React from 'react'
import datascience from 'images/user-info/aoi/datascience.svg'
import project from 'images/user-info/aoi/projectmanagement.svg'
import webdev from 'images/user-info/aoi/webdev.svg'
import cloud from 'images/user-info/aoi/cloud.svg'
import ml from 'images/user-info/aoi/ml.svg'
import robotics from 'images/user-info/aoi/robotics.svg'
import coding from 'images/user-info/aoi/coding.svg'
import business from 'images/user-info/aoi/businessanalysis.svg'
import gaming from 'images/user-info/aoi/gaming.svg'
import electrical from 'images/user-info/aoi/electrical.svg'
import uiux from 'images/user-info/aoi/uiux.svg'
import fintech from 'images/user-info/aoi/fintech.svg'
import economics from 'images/user-info/aoi/economics.svg'
import mechanical from 'images/user-info/aoi/mechanical.svg'
import hr from 'images/user-info/aoi/HR.svg'
import marketing from 'images/user-info/aoi/marketing.svg'
import stock from 'images/user-info/aoi/stock.svg'

import avatar from 'images/user-info/avatar.png';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

export default function AreaOfInterest(props :any) {
    const {
      formField: {
         aoi   
      }
    } = props;

    return (
        <section className="upload">
          
        <div className="upload__text">
            <h6 className="heading-secondary">Upload your Profile Picture</h6>
            <p className="paragraph-primary--green">Your Profile Picture always assists in showcasing you in a better wayto your connection</p>
        </div>

        <form className="upload__form">

              <div className="upload__form__image">
                <label htmlFor="image">
                <img src={avatar} alt="" className="user-detail__form__img"   ></img>                    </label>
                <input  type="file" id="image" hidden/>
              </div>


              <div className="upload__form__bio">
                <div className="upload__text">
                 <h6 className="heading-secondary">Add Bio To your Profile</h6>
                  <p className="paragraph-primary--green">A well written bio goes a long way in making a good impresssion</p>
                    
                    <textarea className="input-formComponent"
                        placeholder='Write down a short summary about you and your interest' 
                      
                        rows={3}
                      />
                </div>
              </div>
        </form>
          <Link to="feed" className="skip">Skip for now</Link>
        
      </section>
    )
}

