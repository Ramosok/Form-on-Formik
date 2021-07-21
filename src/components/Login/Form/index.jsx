// libraries
import React from 'react';
import FormControl from '../../shared/FormControl';

const LoginForm = () => {

  return (
    <>
      <FormControl
        type="text"
        name="firstName"
        label="First Name"
        placeholder="First Name"
      />
      <FormControl
        type="text"
        name="lastName"
        label="Last Name"
        placeholder="Last Name"
      />
      <FormControl
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
      />
      <FormControl
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
      />
      <FormControl
        type="text"
        name="address"
        label="address"
        placeholder="Аddress"
      />
        <FormControl
          type="text"
          name="zip"
          label="ZIP"
          placeholder="Zip"
        />
      <FormControl
        type="text"
        name="country"
        label="Country"
        disabled="disabled"
      />
      <FormControl
        select="select"
        name="state"
        label="state"
      />
      <FormControl
        type="checkbox"
        name="Accept terms and conditions"
        label="Accept terms and conditions"
      />

      <button type="submit">Submit</button>
    </>
  );
};

export default LoginForm;
