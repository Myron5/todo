import * as Yup from 'yup';

export const schemaCreateUpdate = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum name length is 3 characters')
    .max(40, 'Maximum name length is 30 characters')
    .required('This field is required'),
  description: Yup.string()
    .required('This field is required')
    .min(6, 'Minimum description length is 6 characters')
    .max(1000, 'Maximum description length is 1000 characters'),
  //  .oneOf([true], 'Field must be checked'),
  isCompleted: Yup.boolean(),
  isPrivate: Yup.boolean()
});
