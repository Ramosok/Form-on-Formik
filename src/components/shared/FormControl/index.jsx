// libraries
import React from 'react';
import { Field, ErrorMessage } from 'formik';
//style
import './index.css';

const FormControl = ({ name, label, placeholder,type  }) => {
  return (
    <>
      <div className="positionClass">
        <label htmlFor={ name }>{ label }</label>
        <div className="positionField"><Field  type={ type } name={ name } placeholder={ placeholder } id="userName"/></div>
        <div className="formControlClass"><ErrorMessage name={ name }/></div>
      </div>

    </>
  );
};

export default FormControl;
