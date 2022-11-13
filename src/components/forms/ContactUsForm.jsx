import { Form, Formik } from "formik";
import React from "react";
import TextField from "../ui/TextField";
import SendButton from "../utils/SendButton";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";

const ContactUsForm = () => {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      //   validationSchema={registrationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <div className="container">
          <div className="contact__wrapper shadow-lg mt-n9">
            <div className="row no-gutters">
              <div className="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                <h3 className="color--white mb-5">Contact</h3>
                <ul className="contact-info__list list-style--none position-relative z-index-101">
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <EmailIcon />
                    </span>
                    Book@test.com
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <CallIcon />
                    </span>
                    +91-987543210
                  </li>
                  <li className="mb-4 pl-4">
                    <span className="position-absolute">
                      <i className="fas fa-map-marker-alt"></i>
                      <LocationOnIcon />
                    </span>
                    E-6K
                    <br /> Karol Bagh
                    <br /> Delhi-110056
                    <div className="mt-3">
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        className="text-link link--right-icon"
                        style={{ color: "black" }}
                      >
                        Direction
                        <DirectionsIcon />
                      </a>
                    </div>
                  </li>
                </ul>

                <figure
                  className="figure position-absolute m-0 opacity-06 z-index-100"
                  style={{ bottom: 0, right: "10px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="444px"
                    height="626px"
                  >
                    <defs>
                      <linearGradient
                        id="PSgrad_1"
                        x1="0%"
                        x2="81.915%"
                        y1="57.358%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgb(255,255,255)"
                          stopOpacity="1"
                        ></stop>
                        <stop
                          offset="100%"
                          stopColor="rgb(0,54,207)"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      opacity="0.302"
                      fill="rgb(72, 155, 248)"
                      d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                    ></path>
                    <path
                      fill="url(#PSgrad_1)"
                      d="M816.210,-41.714 L968.999,111.158 L-197.210,1277.998 L-349.998,1125.127 L816.210,-41.714 Z"
                    ></path>
                  </svg>
                </figure>
              </div>
              <div className="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                <Form>
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <TextField label="Name" name="name" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <TextField label="Email" name="email" type="email" />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <TextField
                          label="Telephone"
                          name="telephone"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-3">
                      <div className="form-group">
                        <TextField label="Subject" name="subject" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-3">
                      <div className="form-group">
                        <label className="required-field" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="4"
                          className="form-control md-textarea"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-sm-12 mb-3">
                      <SendButton />
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default ContactUsForm;
