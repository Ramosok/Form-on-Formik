// libraries
import React, { useState, useEffect } from 'react';
// components
import Form from 'components/shared/Form';
import SignUpForm from 'components/SignUp/Form';
import { initialValues, SignupSchema } from './Form/config';

const SignUp = () => {
    return (
        <div className="container">
          <div>
            <h1>Registration</h1>
            <Form
              field={SignUpForm}
              initialValues={initialValues}
              validationSchema={SignupSchema}
              onSubmitCallback={(values) => { console.log('SignUp', values) } }
            />
          </div>
        </div>
    );
};

export default SignUp;
