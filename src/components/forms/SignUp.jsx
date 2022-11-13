import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import TextField from "../ui/TextField";
import signUpSchema from "../validation/signUpSchema";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIconButton from "../utils/DeleteIcon";
import { Button, IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    firstName: "",
    email: [""],
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
      {(formik) => (
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Sign Up</h1>
              </div>
              <form onSubmit={formik.handleSubmit} className="form">
                <TextField
                  // label="Name"
                  placeholder="Name"
                  name="firstName"
                  type="text"
                  className="input-field"
                />

                <FieldArray
                  name="email"
                  render={(arrayHelpers) => (
                    <>
                      <div>
                        {formik.values.email.map((item, index) => (
                          <div key={`${index}_formik`}>
                            <TextField
                              className="input-field"
                              placeholder="Email Address"
                              // label="Email-Address"
                              name={`email[${index}]`}
                              type="text"
                              value={formik.values.email[index]}
                              onChange={formik.handleChange}
                            />

                            {index > 0 && (
                              <Tooltip title="Delete">
                                <IconButton
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                    console.log(index);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                            )}
                          </div>
                        ))}
                        <Tooltip title="Add">
                          <IconButton onClick={() => arrayHelpers.push("")}>
                            <AddCircleOutlineIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </>
                  )}
                />

                <TextField
                  // label="Password"
                  placeholder="Password"
                  name="password"
                  type="password"
                  className="input-field"
                />
                <TextField
                  className="input-field"
                  // label="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
                <div className="input-control">
                  <button className="input-submit" type="submit">
                    Sign-Up
                  </button>
                  <button
                    className="btn btn-danger input-reset mt-3 m-2"
                    type="reset"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      )}
    </Formik>
  );
};
export default SignUp;
