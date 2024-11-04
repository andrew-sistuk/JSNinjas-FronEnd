import * as yup from 'yup';

export const schemaCreate = yup.object().shape({
  nickname: yup
    .string()
    .required('Nickname is required')
    .min(3, 'Nickname must contain at least 3 characters')
    .max(30, 'Nickname must contain only 30 characters'),
  real_name: yup
    .string()
    .required('Real name is required')
    .min(3, 'Real name must contain at least 3 characters')
    .max(30, 'Real name must contain only 30 characters'),
  origin_description: yup.string().required('Origin description is required'),
  catch_phrase: yup.string().required('Catch phrase is required'),
  superpowers: yup.string().required('Superpowers is required'),
});

export const schemaUpdate = yup.object().shape({
  nickname: yup
    .string()
    .min(3, 'Nickname must contain at least 3 characters')
    .max(30, 'Nickname must contain only 30 characters'),
  real_name: yup
    .string()
    .min(3, 'Real name must contain at least 3 characters')
    .max(30, 'Real name must contain only 30 characters'),
  origin_description: yup.string(),
  catch_phrase: yup.string(),
  superpowers: yup.string(),
});
