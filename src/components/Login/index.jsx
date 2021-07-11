// libraries
import React from 'react';
// components
import Form from 'components/shared/Form';
import LoginForm from 'components/Login/Form';
import { initialValues, LoginSchema } from 'components/Login/Form/config';


const Login = () => {

  // const handleSubmit = async (values) => {
  //   try {
  //     await loginUser(values);
  //     console.log('success')
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
    return (
        <div className="container">
          <div>
            <h1>Login</h1>
            <Form
              field={LoginForm}
              validationSchema={LoginSchema}
              initialValues={initialValues}
              // onSubmitCallback={handleSubmit}
              onSubmitCallback={(values) => { console.log(values) }}
            />
          </div>
        </div>
    );
};

export default Login;
