// libraries
import React, { useState, useEffect } from 'react';
import { Formik, Form as FormikForm } from 'formik';

const Form = ({ field, initialValues, onSubmitCallback, validationSchema }) => {
  const FieldComponent = field;

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmitCallback}
      validationSchema={validationSchema}
    >
      {(formikProps) =>
        <FormikForm noValidate>
          <FieldComponent {...formikProps} />
        </FormikForm>
      }
    </Formik>
  );
};

export default Form;
