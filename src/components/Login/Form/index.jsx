// libraries
import React from 'react';
import FormControl from '../../shared/FormControl';

const LoginForm = () => {

  return (
    <>
      <FormControl
        type="text"
        name="userName"
        label="Your Name"
        placeholder="Your Name"
      />

      <FormControl
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </>
  );
};

export default LoginForm;
