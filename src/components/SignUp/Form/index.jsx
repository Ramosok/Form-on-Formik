// libraries
import React, { useState, useEffect } from 'react';
import { Field, ErrorMessage } from 'formik';

const SignUpForm = (props) => {
    return (
        <>
          <Field
            type="text"
            name="userName"
            placeholder="User Name"
          />
          <ErrorMessage name="userName" />

          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" />
          <Field type="text" name="address" placeholder="Address" />
          <ErrorMessage name="address" />
          <button type="submit">Submit</button>
        </>
    );
};

export default SignUpForm;
