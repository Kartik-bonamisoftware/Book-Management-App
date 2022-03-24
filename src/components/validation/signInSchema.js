import * as yup from "yup";

const signInSchema = yup.object().shape({
  username: yup.string().email().required("Enter Your Username"),
  password: yup.string().required("Enter Your Password"),
});

// username: "",
// password: "",

export default signInSchema;
