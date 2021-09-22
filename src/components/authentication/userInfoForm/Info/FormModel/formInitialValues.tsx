import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    //step1
    role,
    //step2
    firstName,
    lastName,
    university,
    degree,
    year,

    //mentor
    McurrDesignation,
    McurrOrganization,
    profExperience,

    //enterprenuer
    EcurrOrganization,
    EcurrRole,
    EstartOfJourney,

    //step3
    aoi,
    
    //step4
    bio,
    image,
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [role.name]: 'student',
  [degree.name]: '',
  [university.name]: '',
  [year.name]: '',
  [bio.name]: false,
  [image.name]: '',

  [McurrDesignation.name]: '',
  [McurrOrganization.name]: '',
  [profExperience.name]: '',

  [EcurrOrganization.name]: '',
  [EcurrRole.name]: '',
  [EstartOfJourney.name]: '',


  [aoi.name]:'',
};