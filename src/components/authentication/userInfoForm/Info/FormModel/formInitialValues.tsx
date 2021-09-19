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
    image,

    //mentor
    McurrDesignation,
    McurrOrganization,
    profExperience,

    //enterprenuer
    EcurrOrganization,
    EcurrRole,
    EstartOfJourney,

    aoi
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