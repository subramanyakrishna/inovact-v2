import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import  InputField from 'components/authentication/userInfoForm/Info/FormFields/InputField';

export default function PaymentForm(props :any) {
  const {
    formField: { 
        role,
        McurrDesignation,
        McurrOrganization,
        profExperience,
    
        //enterprenuer
        EcurrOrganization,
        EcurrRole,
        EstartOfJourney, }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      {role === 'mentor' &&
       <Grid container spacing={3}>
       <Grid item xs={12} md={6}>
         <InputField
           name={McurrDesignation.name}
           label={McurrDesignation.label}
           fullWidth
         />
       </Grid>
       <Grid item xs={12} md={6}>
         <InputField
           name={McurrOrganization.name}
           label={McurrOrganization.label}
           fullWidth
         />
       </Grid>
       
       <Grid item xs={12} md={6}>
         <InputField name={profExperience.name} label={profExperience.label} fullWidth />
       </Grid>
     </Grid>
       }
       {role === 'enteprenuer' &&
       <Grid container spacing={3}>
       <Grid item xs={12} md={6}>
         <InputField
           name={EcurrRole.name}
           label={EcurrRole.label}
           fullWidth
         />
       </Grid>
       <Grid item xs={12} md={6}>
         <InputField
           name={EcurrOrganization.name}
           label={EcurrOrganization.label}
           fullWidth
         />
       </Grid>
       
       <Grid item xs={12} md={6}>
         <InputField name={EstartOfJourney.name} label={EstartOfJourney.label}  />
       </Grid>
     </Grid>
       }
    </React.Fragment>
  );
}