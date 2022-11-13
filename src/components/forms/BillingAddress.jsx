import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import TextField from "../ui/TextField";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import billingAddressSchema from "../validation/billingAddressSchema";
import axios from "axios";

const BillingAddress = () => {
  // Country selector
  //   const [value, setValue] = useState("");
  //   const options = useMemo(() => countryList().getData(), []);
  //
  //   const changeHandler = (value) => {
  // setValue(value);
  //   };

  const handlePincode = async (formik, value) => {
    if (value.length === 6) {
      let resp = await axios.get(
        `https://api.postalpincode.in/pincode/${value}`
      );
      let result = resp.data[0].PostOffice[0];
      console.log(result);
      formik.setFieldValue("district", result.District);
      formik.setFieldValue("state", result.State);
    }
  };

  const initialValues = {
    fullname: "",
    email: "",
    mobile: "",
    alternateMobile: "",
    address: "",
    address2: "",
    state: "",
    district: "",
    pincode: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={billingAddressSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className=" container center col-md-7">
          <h1 className="my-4 font-weight-bold .display-4">
            Billing Address Form
          </h1>
          <Form>
            <div className="form-row col-md-6">
              <div className="form-group col-md-6">
                <TextField label="Name" name="fullname" type="text" />
              </div>
              <div className="form-group col-md-6">
                <TextField label="Email Address" name="email" type="text" />
              </div>
              <div className="form-group col-md-6">
                <TextField label="Mobile Number" name="mobile" type="text" />
              </div>
              <div className="form-group col-md-6">
                <TextField
                  label="Alternate Number"
                  name="alternateMobile"
                  type="text"
                />
              </div>
            </div>
            <div className="form-group col-md-6">
              <TextField label="Address" name="address" type="text" />
            </div>
            <div className="form-group col-md-6">
              <TextField label="Address 2" name="address2" type="text" />
            </div>
            <div className="form-row col-md-6">
              <div className="form-group col-md-4">
                <TextField label="State" name="state" type="text" />
              </div>
              <div className="form-group col-md-4">
                <TextField label="District" name="district" type="text" />

                {/* <Select   // Country Selector
                  options={options}
                  value={value}
                  onChange={changeHandler}
                /> */}
                {/* <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select> */}
              </div>
              <div className="form-group col-md-4">
                <TextField
                  label="Pincode"
                  name="pincode"
                  type="text"
                  value={formik.values.pincode}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handlePincode(formik, e.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary ml-3">
              Continue to Payment
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default BillingAddress;
