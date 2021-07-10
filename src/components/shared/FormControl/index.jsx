// libraries
import React from 'react';
import { ErrorMessage, Field } from 'formik';
//style
import './index.css';


const FormControl = (props) => {
  console.log();

    return (
      <>
        <label htmlFor="userName" className="formControlClass">Your name</label>
        <Field className="formControlClass"
               type="userName"
               name="userName"
               id="userName"
               placeholder="your name"
        />
        <div><ErrorMessage name="userName" /></div>

        <label htmlFor="email" className="formControlClass">Your email</label>
        <Field
          className="formControlClass"
          type="userEmail"
          name="userEmail"
          id="userEmail"
          placeholder="your email"
        />
        <div><ErrorMessage name="email" /></div>
      </>
    );
};

export default FormControl;
