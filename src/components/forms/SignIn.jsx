import React from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import TextField from "../ui/TextField";
import signInSchema from "../validation/signInSchema";

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div className="col-md-2">
          <h1 className="my-5 font-weight-bold .display-4">Login</h1>
          {/* {console.log(formik.values)} */}
          <Form>
            <TextField label="Username" name="username" type="email" />
            <TextField label="Password" name="password" type="password" />
            <button className="btn btn-success mt-3 m-2" type="submit">
              Login
            </button>
            <button className="btn btn-dark mt-3 m-2">
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignIn;
