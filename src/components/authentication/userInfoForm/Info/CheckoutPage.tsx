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


const steps = ['Role', 'General Info', 'Mentor','Enteprenuer','AreaOfInterest','Upload Form'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step :number) {
  switch (step) {
    case 0:
      return <RoleForm formField={formField} />;
    case 1:
      return <GeneralForm formField={formField} />;
    case 2:
        return <MentorForm formField={formField} />;
    case 3:
          return <EnteprenuerForm formField={formField} />;
    case 4:
            return <AreaOfInterest formField={formField} />;
    case 5 : 
    return <UploadForm  formField={formField}/>
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {

  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

 function submitForm(values:any, actions:any) {
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function handleSubmit(values :any, actions :any) {
      if(isLastStep){
        submitForm(values,actions)
      }
      if(activeStep==1){
        if( values.role === "student") {
          setActiveStep(activeStep + 3);
        }
        else if(values.role === "mentor"){
          setActiveStep(activeStep+1)
        }
        else {
          setActiveStep(activeStep + 2);
        }
      }
     else{
      setActiveStep(activeStep + 1);
     }
      actions.setTouched({});
      actions.setSubmitting(false);
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
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
                {_renderStepContent(activeStep)}

                <div className="buttons">
                  {activeStep !== 0 && (
                    <button onClick={handleBack} className="button button--white">
                      Back
                    </button>
                  )}
                 
                  <button
                  disabled={isSubmitting}
                  type="submit"
                  className="form-button button--green"
                 style={{textAlign:'center',justifySelf:'center'}}>
                  {isLastStep ? <a href="/feed" className="text-color--white">Finish</a> : 'Next'}
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