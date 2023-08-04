import * as yup from "yup";

const requiredField = "* This field is required";
const StudentStepThreeFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "Answer must be more than 4 characters")
    .required(requiredField),
  lastName: yup
    .string()
    .min(4, "Answer must be more than 4 characters")
    .required(requiredField),
  email: yup
    .string()
    .email("Please provide a valid email address")
    .required(requiredField),
  age: yup.number().required(requiredField),
  password: yup
    .string()
    .min(8, "Password cannot be less than 8 characters")
    .required(requiredField),
  confirmPassword: yup
    .string()
    .min(8, "Password cannot be less than 8 characters")
    .required(requiredField),
});

export default StudentStepThreeFormSchema;
