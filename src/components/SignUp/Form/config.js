import * as Yup from "yup";

export const initialValues = {
  userName: '',
  email: '',
  address: ''
}

export const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(170, 'Too Long!')
    .required('Required'),
});
