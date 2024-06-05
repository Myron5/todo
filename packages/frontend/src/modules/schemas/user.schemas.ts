import * as Yup from 'yup';

export const schemaLogin = Yup.object({
  email: Yup.string()
    .min(3, 'Minimum email length is 3 characters')
    .max(30, 'Maximum email length is 30 characters')
    .email('Invalid email address')
    .required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(6, 'Minimum password length is 6 characters')
    .max(30, 'Maximum password length is 30 characters')
});

export const schemaRegister = Yup.object({
  email: Yup.string()
    .min(3, 'Minimum email length is 3 characters')
    .max(30, 'Maximum email length is 30 characters')
    .email('Invalid email address')
    .required('The email is required'),
  password: Yup.string()
    .required('The password is required')
    .min(6, 'Minimum password length is 6 characters')
    .max(30, 'Maximum password length is 30 characters'),
  confirmpassword: Yup.string()
    .required('The confirmpassword is required')
    .min(6, 'Minimum password length is 6 characters')
    .max(30, 'Maximum password length is 30 characters')
});

export const schemaSendResetPassword = Yup.object({
  email: Yup.string()
    .min(3, 'Minimum email length is 3 characters')
    .max(30, 'Maximum email length is 30 characters')
    .email('Invalid email address')
    .required('The email is required')
});

export const schemaResetPassword = Yup.object({
  newpassword: Yup.string()
    .required('The password is required')
    .min(6, 'Minimum password length is 6 characters')
    .max(30, 'Maximum password length is 30 characters')
});
