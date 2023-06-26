import * as yup from "yup";

const requiredField = "* This field is required";
const TeacherStepThreeFormSchema = yup.object().shape({
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
  phone: yup.string().min(10).max(14).required(requiredField),
  experienceSince: yup
    .string()
    .min(4, "Answer must be more than 4 characters")
    .required(requiredField),
});

export default TeacherStepThreeFormSchema;
