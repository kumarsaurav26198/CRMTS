import * as Yup from 'yup';

export const LOGIN_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .email('Email entered is not valid')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
});


export const FORGOT_SCHEMA = Yup.object().shape({
    email: Yup.string()
        .email('Email entered is not valid')
        .required('Email is required'),
})


export const RESET_PASSWORD_SCHEMA = Yup.object().shape({

    otp: Yup.string().required('OTP required'),
    password: Yup.string().required('Password is required'),
})

export const SEND_SELECTED_PROPERTIES_SCHEMA = Yup.object().shape({
    client_emails: Yup.string().email('Email entered is not valid')
        .required('Email is required'),
    subject: Yup.string().required('Enter subject'),
    message: Yup.string().required('Enter message')
})
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const ADD_CONTACT_SCHEMA = Yup.object().shape({
    user_email: Yup.string().email('Email entered is not valid')
        .required('Email is required'),
    user_fullname: Yup.string().required('Fullname is required'),
    user_mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Mobile is required'),
    userrole: Yup.string().required('User role is required'),
    other_contact_type: Yup.string().required('Contact type is required'),
    company_name: Yup.string().required('Company name is required'),
    city_of_interest: Yup.string().required('City of interest is required'),
    street_address: Yup.string().required('Street address is required'),
    city: Yup.string().required('City address is required'),
    state: Yup.string().required('State address is required'),
    zip: Yup.string().required('Zip address is required'),
    facebook_url: Yup.string().url('Facebook url is not valid').required('Facebook URL address is required'),
    google_url: Yup.string().url('Google url is not valid').required('Google URL address is required'),
    instagram_url: Yup.string().url('Instagram url is not valid').required('Instagram URL address is required'),
    linkedin_url: Yup.string().url('LinkedIn url is not valid').required('LinkedIn URL address is required'),
    existing_contacts: Yup.string().required('City of interest is required'),

})