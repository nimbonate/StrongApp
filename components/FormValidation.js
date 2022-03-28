
import * as Yup from 'yup'


//This file is used for all form validations across the app

//exporting the validation schemas to be used in formik forms across the app
export const newApptSchema = Yup.object().shape({
    hasSpouse: Yup.boolean(),
    firstName: Yup.string()
        .required('First Name is required')
        .min(3, '3 Character Minimum'),
    lastName: Yup.string()
        .required('Last Name is required')
        .min(3, '3 Character Minimum'),
    spouseFirstName: Yup.string()
        .when("hasSpouse", {
        is: true,
        then: Yup.string()
        .required("First Name is required")
        .min(3, '3 Character Min')
    }),
    spouseLastName: Yup.string()
    .when("hasSpouse", {
        is: true,
        then: Yup.string()
        .required("Last Name is required")
        .min(3, '3 Character Min')
    }),
    Phone1: Yup.string()
        .matches('^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$', 'Phone number is not valid')
        .required('Phone number is required'),
    Phone2: Yup.string()
    .when("hasSpouse", {
        is: true,
        then: Yup.string()
        .matches('^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$', 'Phone number is not valid')
    }),
    Address: Yup.string()
        .required('Address is required')
        .min(4, 'Not a Valid Address'),
    City: Yup.string()
        .required('City is required')
        .min(3, 'Not a Valid City'),
    State: Yup.string()
        .required('required')
        .min(2, 'required'),
    Zip: Yup.string()
        .required('Zip is required')
        .min(5, 'Enter valid Zip code'),
    houseMarking: Yup.string()
        .required('Add a House Detail')
        .min(5, 'Add a House Detail'),
    healthConcerns: Yup.string()
        .required('Ask for their recent health concerns')
        .min(5, 'Ask for their recent health concerns')
})

export const loginSchema = Yup.object().shape({
    Email: Yup.string()
        .required('Email Required')
        .matches('^[A-Za-z0-9._%+-]+@stronglyfe.com$', 'Must Enter Valid SFF Email'),
    Password: Yup.string()
        .required('Please Enter Password')
})

export const adminLoginSchema = Yup.object().shape({
    Email: Yup.string()
        .required('Email Required')
        .matches(/((^|, )(nelkind|asaleh|mjohnson|sharris|bborchers|sthurber|cbuchanan|hfierro))@stronglyfe\.com$/gmi, 'Must be an admin'),
    Password: Yup.string()
        .required('Please Enter Password')
})