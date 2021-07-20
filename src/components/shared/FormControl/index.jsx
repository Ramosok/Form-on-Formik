// libraries
import React from 'react';
import { Field, ErrorMessage } from 'formik';
//style
import './index.css';
import { usaStates } from '../../Login/Form/config';

const FormControl = ({ name, label, placeholder, type, disabled, select }) => {
  return (
    <>
      {!select ? <div className="positionClass">
          <label htmlFor={name}>{label}</label>
          <div className="positionField">
            <Field disabled={disabled}
                   type={type}
                   name={name}
                   placeholder={placeholder}
                   id="userName"/></div>
          <div className="formControlClass"><ErrorMessage name={name}/></div>
        </div>
        : <div className="positionClass">
          <label htmlFor={name}>{label}</label>
          <div className="positionField">
            <Field
              states={usaStates}
              disabled={disabled}
              as={select}
              name={name}>
              {usaStates.map(usaState => (
                <option key={usaState}>{usaState}</option>
              ))}
            </Field>
          </div>
        </div>
      }
    </>
  );
};

export default FormControl;
