// libraries
import React, { useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';
import FormControl from '../../shared/FormControl';

const LoginForm = () => {
    return (
        <>
          <FormControl
            type="text"
            name="userName"
            label="User Name"
            placeholder="User Name"
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
