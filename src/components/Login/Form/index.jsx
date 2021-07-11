// libraries
import React from 'react';
import FormControl from '../../shared/FormControl';

const LoginForm = (props) => {
    return (
      <>
        <FormControl
          type="text"
          name="userName"
          placeholder="User Name"

        />
        <button type="submit">Submit</button>
      </>
    );
};

export default LoginForm;
