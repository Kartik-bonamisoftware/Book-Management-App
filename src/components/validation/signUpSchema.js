import * as yup from "yup";

const nameRegExp = /^[aA-zZ\s]+$/;
const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(nameRegExp, "Please Enter Valid Name")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: yup
    .array()
    .of(
      yup.string().email("Invalid Email").required("Please Enter Your Email")
    ),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Please Enter Your Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please Enter Your Confirm Password"),
});

export default signUpSchema;
