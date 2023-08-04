import * as yup from "yup";

const requiredField = "* This field is required";
const ContactFormSchema = yup.object().shape({
  firstName: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required(requiredField),
  phone: yup.string().min(10).max(14).required(requiredField),
  message: yup.string().required(requiredField),
});

export default ContactFormSchema;
