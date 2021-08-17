import React, { Component } from 'react'
import RoleSelection from './components/roleSelection/RoleSelection';
import UserDetails from './components/userDetails/UserDetails';
import Mentor from './components/mentor/Mentor';
import Enterprenuer from './components/enterprenuer/Enterprenuer'
import AreaOfInterest from './components/areaOfInterest/AreaOfInterest'
import UploadPicture from './components/upload/Upload'

export default class Signup extends Component {

  state = {
    step: 1,

    role:'student',

    university: '',
    degree: '', 
    year: '',

    //mentor
    McurrDesignation:'',
    McurrOrganization:'',
    profExperience:'',

    //enterprenuer
    EcurrOrganization:'',
    EcurrRole:'',
    EstartOfJourney:'',
 
  }

  prevStep = (stepNum:number) => {
    this.setState({ step: stepNum });
  }
  
  nextStep = (stepNum:number) => {
    this.setState({ step: stepNum });
  }

  handleChange =  (input : any) => (e : any) => {
    if(e.target.tagName === 'IMG') {
     this.setState({[input]:e.target.id})
     console.log(this.state.role);
    } 
  else {
    this.setState({ [input]: e.target.value });
       }
  }

  render() {
    const { step } = this.state;
    const {  role,  university,degree,year,McurrDesignation,McurrOrganization,profExperience,EcurrOrganization,EcurrRole,EstartOfJourney } = this.state;
    const values = {role, university,degree,year,McurrDesignation,McurrOrganization,profExperience,EcurrOrganization,EcurrRole,EstartOfJourney }
    
    switch(step) {
      case 1: 
        return (
          <RoleSelection 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return <div>
        <UserDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />  
        </div>
        
     case 3:  return <div>
       {
        this.state.role === 'mentor' &&  
        <Mentor
        prevStep={ this.prevStep }
        nextStep={ this.nextStep }
        handleChange={ this.handleChange }
        values={ values }
      />}
      {
      this.state.role==='enterprenuer' &&   <Enterprenuer
      prevStep={ this.prevStep }
      nextStep={ this.nextStep }
      handleChange={ this.handleChange }
      values={ values }
      />}
      {this.state.role==='student' && <AreaOfInterest
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            /> }
     </div> 
        case 4: 
          return (
            <AreaOfInterest
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              handleChange={ this.handleChange }
              values={ values }
            />
          )
          case 5: 
          return (
            <UploadPicture
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
              handleChange={ this.handleChange }
            />
          )
      
      default: 
          // do nothing
    }
  }
}