import { Form, Formik } from "formik";
import React from "react";
import TextField from "../ui/TextField";
import signUpSchema from "../validation/signUpSchema";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div className="col-md-3">
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Name" name="firstName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="btn btn-dark mt-3 m-2" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 m-2" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default SignUp;
