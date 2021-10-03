import * as Yup from 'yup';   
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    role,
    university,
    degree,
    year,
    bio,
    aoi,
    //mentor
    McurrDesignation,
    McurrOrganization,
    profExperience,

    //enterprenuer
    EcurrOrganization,
    EcurrRole,
    EstartOfJourney,
  }
} = checkoutFormModel;

export default [
  
  Yup.object().shape({

  }),
  Yup.object().shape({
    // [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    // [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`), 
    // [university.name]: Yup.string().required(`${university.requiredErrorMsg}`), 
    // [degree.name]: Yup.string().required(`${degree.requiredErrorMsg}`),
    // [year.name]: Yup.string().required(`${year.requiredErrorMsg}`)
  }),

  Yup.object().shape({
    // [McurrDesignation.name]: Yup.string().required(`${McurrDesignation.requiredErrorMsg}`),
    // [McurrOrganization.name]: Yup.string().required(`${McurrOrganization.requiredErrorMsg}`),
    // [ profExperience.name]: Yup.string()
    //   .nullable()
    //   .required(`${ profExperience.requiredErrorMsg}`), 
  }),

  Yup.object().shape({
    // [EcurrOrganization.name]: Yup.string().required(`${EcurrOrganization.requiredErrorMsg}`),
    //   [EcurrRole.name]: Yup.string().required(`${EcurrRole.requiredErrorMsg}`),
    //   [ EstartOfJourney.name]: Yup.string()
    //     .nullable()
    //     .required(`${ EstartOfJourney.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    
  }),

  Yup.object().shape({
    // [bio.name]: Yup.string().required(`${aoi.requiredErrorMsg}`),
  })
];  