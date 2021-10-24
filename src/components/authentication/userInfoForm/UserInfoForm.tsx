import React from 'react'
import CheckoutPage from './Info/CheckoutPage';

const UserInfoForm = (props: any) => {
    return (
          <div >     
            <CheckoutPage handleChange={props.handleChange}/>
          </div>
    );
}

export default UserInfoForm
