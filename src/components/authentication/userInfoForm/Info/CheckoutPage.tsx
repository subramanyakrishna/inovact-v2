import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import RoleForm from './Forms/RoleForm';
import GeneralForm from './Forms/GeneralForm';
import RoleSpecificForm from './Forms/MentorForm';

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import AreaOfInterest from './Forms/AreaOfInterest';


const steps = ['Role', 'General Info', 'RoleSpecific','AreaOfInterest','Upload Form'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step :number) {
  switch (step) {
    case 0:
      return <RoleForm formField={formField} />;
    case 1:
      return <GeneralForm formField={formField} />;
    case 2:
        return <RoleSpecificForm formField={formField} />;
    case 3:
          return <AreaOfInterest formField={formField} />;
    case 4:
            return <AreaOfInterest formField={formField} />;
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

      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
  
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }
  function handleNext() {
    setActiveStep(activeStep + 1);
  }

  return (
    <React.Fragment>
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className="buttons buttons--center">
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className="button button--white">
                      Back
                    </Button>
                  )}
                 
                  <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="buttons button--green"
                >
                  {isLastStep ? 'Finish' : 'Next'}
                </Button>
                
                </div>
              </Form>
               )}
          </Formik>
     
    </React.Fragment>
  );
}