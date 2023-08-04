import * as yup from "yup";

const requiredField = "* This field is required";
const StudentStepTwoFormSchema = yup.object().shape({
  academicYear: yup
    .string()
    .min(4, "Answer must be more than 4 characters")
    .required(requiredField),
});

export default StudentStepTwoFormSchema;
