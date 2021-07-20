import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  password: '',
  zip: '',
  country: 'USA',
};

export const usaStates = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Florida',
  'Georgia',
  'Michigan',
  'Oklahoma',
  'Texas',
  'Utah',
];
const minLength = 2;
const maxLength = 70;
export const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});