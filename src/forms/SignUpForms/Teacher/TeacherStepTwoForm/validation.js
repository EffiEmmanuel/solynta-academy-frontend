import * as yup from "yup";

const requiredField = "* This field is required";
const TeacherStepTwoFormSchema = yup.object().shape({
  higherEducation: yup.string().min(4, 'Answer must be more than 4 characters').required(requiredField),
  subjectSpecialism: yup.string().min(4, 'Answer must be more than 4 characters').required(requiredField),
  experienceSince: yup.string().min(4, 'Answer must be more than 4 characters').required(requiredField),
});

export default TeacherStepTwoFormSchema;
