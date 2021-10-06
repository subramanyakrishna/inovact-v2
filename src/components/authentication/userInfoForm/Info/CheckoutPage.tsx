import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Feed from 'components/application/components/feed/Feed'
import RoleForm from 'components/authentication/userInfoForm/Info/Forms/RoleForm';
import GeneralForm from 'components/authentication/userInfoForm/Info/Forms/GeneralForm';
import MentorForm from 'components/authentication/userInfoForm/Info/Forms/MentorForm';
import EnteprenuerForm from 'components/authentication/userInfoForm/Info/Forms/EnteprenuerForm';
import UploadForm from 'components/authentication/userInfoForm/Info/Forms/Upload';
import AreaOfInterest from 'components/authentication/userInfoForm/Info/Forms/AreaOfInterest';
import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import NavBar from 'components/application/components/NavBar'
import userSignup from 'redux/UserAuthentication/UserSignup';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import UserPool from 'redux/UserAuthentication/UserPool';
import { store } from 'redux/helpers/store';
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants';


const steps = ['Role', 'General Info', 'Role-Specific-Form','AreaOfInterest','Upload Form'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step :number, handleChange: any) {
  switch (step) {
    case 0:
      return <RoleForm formField={formField} handleChange={handleChange}/>;
    case 1:
      return <GeneralForm formField={formField} handleChange={handleChange}/>;
    case 2:
        return <MentorForm formField={formField} handleChange={handleChange}/>;
    case 3:
            return <AreaOfInterest formField={formField} handleChange={handleChange}/>;
    case 4 : 
    return <UploadForm  formField={formField} handleChange={handleChange}/>
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage(props: any) {

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const userInfo = useSelector((state: any)=>state.userInfo);
 function submitForm(values:any, actions:any) {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  
  const updateProfileCompleteStatus = async()=>{
    store.dispatch({
      type: userInfoConstants.UPDATE_PROFILE_COMPLETE,
    });
  }
  const uploadDetails = async(e: any)=>{
    e.preventDefault();
    //
    const currentUser: any = UserPool.getCurrentUser();
    console.log(currentUser);
    
    updateProfileCompleteStatus().then(()=>{
      axios.put("https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user",userInfo,{
        headers: {
          "Authorization": currentUser.storage.user,
        }
      }).then((resp)=> console.log(resp)).catch(err=>console.log(err));
    })

  }
  function handleSubmit(values :any, actions :any) {
      if(isLastStep){
        submitForm(values,actions)
      }
      if(activeStep === 1){
        if( props.userInfo.role === "Student") {
          setActiveStep(activeStep + 2);
        }
        else {
          setActiveStep(activeStep + 1);
        }
      }
     else{
      setActiveStep(activeStep + 1);
     }
      actions.setTouched({});
      actions.setSubmitting(false);
  }

  function handleBack() {
    if(activeStep===3){
      setActiveStep(activeStep-2);
    }else{
      setActiveStep(activeStep - 1);
    }
  }
 

  return (
    <React.Fragment>
      {activeStep === steps.length ?  (<> <NavBar /> <Feed /> </>):
      (
        <div className="user-info">
        <div className="user-info__card">
        <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep, props.handleChange)}

                <div className="buttons">
                  {activeStep !== 0 && (
                    <a onClick={handleBack} className="button button--white">
                      Back
                    </a>
                  )}
                 
                  <button
                  disabled={isSubmitting}
                  type="submit"
                  className="form-button button--green"
                 style={{textAlign:'center',justifySelf:'center'}}>
                  {isLastStep ? <a className="text-color--white" href="" onClick={uploadDetails}>Finish</a> : 'Next'}
                </button>
                
                </div>
              </Form>
               )}
          </Formik>
      </div>
          </div>
       
      )}
          
     
    </React.Fragment>
  );
}