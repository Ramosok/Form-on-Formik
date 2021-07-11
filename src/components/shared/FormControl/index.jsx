// libraries
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './index.css';

const FormControl = (props) => {

  console.log();
  return (
    <>
      <div className="positionClass">
        <label htmlFor="userName">Your name</label>
        <div className="positionField"><Field  type="userName" name="userName" placeholder="userName" id="userName"/></div>
        <div className="formControlClass"><ErrorMessage name="userName"/></div>
      </div>
      <div className="positionClass">
        <label htmlFor="email">Email</label>
        <div className="positionField"><Field type="email" name="email" placeholder="Email" id="email"/></div>
        <div className="formControlClass"><ErrorMessage name="email"/></div>
      </div>
    </>
  );
};

export default FormControl;
