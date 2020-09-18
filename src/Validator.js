import * as yup from 'yup'  // Neccessary to bring in all the properties from yup

export default yup.object().shape({  //calls up and yups functions .requried .email .min
name: yup.string()
    .required('Name is required')
    .min(2, 'Name must be 2 characters or longer'),
special: yup.string()
    .min(8, 'Please enter at least 8 characters'),
size: yup.string()
    .oneOf(['small', 'medium', 'large'], 'Size is required'),
mushrooms: yup.string(),
cheese: yup.string(),
peppers: yup.string(),
pineapple: yup.string()

})
