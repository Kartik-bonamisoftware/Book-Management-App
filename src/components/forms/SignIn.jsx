import React from "react";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import TextField from "../ui/TextField";
import signInSchema from "../validation/signInSchema";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { BsApple } from "react-icons/bs";

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
        <main className="main">
          <div className="container">
            <section className="wrapper">
              <div className="heading">
                <h1 className="text text-large">Sign In</h1>
                <p className="text text-normal">
                  New user?{" "}
                  <span>
                    <Link to="/signup" className="text text-links">
                      Create an account
                    </Link>
                  </span>
                </p>
              </div>
              <Form className="form">
                <TextField
                  // label="Email Address"
                  name="username"
                  type="email"
                  className="input-field"
                  placeholder="Email Address"
                />

                <TextField
                  // label="Password"
                  name="password"
                  type="password"
                  className="input-field"
                  placeholder="Password"
                />
                <div className="input-control">
                  <a href="#" className="text text-links">
                    Forgot Password
                  </a>
                  <button className=" input-submit" type="submit">
                    Login
                  </button>
                </div>
              </Form>
              <div className="striped">
                <span className="striped-line"></span>
                <span className="striped-text">Or</span>
                <span className="striped-line"></span>
              </div>
              <div className="method">
                <div className="method-control">
                  <a href="#" className="method-action">
                    <i className="ion ion-logo-google">
                      <FcGoogle />{" "}
                    </i>
                    <span>Sign in with Google</span>
                  </a>
                </div>
                <div className="method-control">
                  <a href="#" className="method-action">
                    <i className="ion ion-logo-facebook">
                      <AiFillFacebook />
                    </i>
                    <span>Sign in with Facebook</span>
                  </a>
                </div>
                <div className="method-control">
                  <a href="#" className="method-action">
                    <i className="ion ion-logo-apple">
                      <BsApple />
                    </i>
                    <span>Sign in with Apple</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </Formik>
  );
};

export default SignIn;
