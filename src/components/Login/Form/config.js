import * as Yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  password: '',
  zip: '',
  country: 'USA',
  state: '',
  checkbox: '',
};

export const usaStates = [
  ' ',
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
const maxLengthPassword = 1;
const minLengthZip = 4;
const maxLengthZip = 5;
export const LoginSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required')
    .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
  lastName: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required')
    .matches(/[a-zA-Z ]/, 'Only  latin letters!'),
  address: Yup.string()
    .min(minLength, 'Too Short!')
    .max(maxLength, 'Too Long!')
    .required('Required')
    .matches(/[a-zA-Z0-9 ]/, 'Only  latin letters and nombers!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(maxLengthPassword, 'Too Short!')
    .matches(/[a-zA-Z0-9]/, 'Password can upper and lower case!'),
  zip: Yup.string()
    .matches(/^[0-9]+$/, 'only nombers')
    .min(minLengthZip, 'at least 5 digits')
    .max(maxLengthZip, 'at least 5 digits'),
  state: Yup.string()
    .matches(/^\s*$/, 'select a state')
    .required('Required'),
  country: Yup.string(),
  checkbox: Yup.boolean()
  .required('Required'),
});