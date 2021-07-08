// libraries
import React from 'react';
import { Formik } from 'formik';

const Form = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmitCallback}
    >
      {(props) =>
        <FormFields {...props} />
      }
    </Formik>
  );
};

export default Form;


