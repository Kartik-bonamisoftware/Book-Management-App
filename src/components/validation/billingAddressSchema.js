import * as yup from "yup";

const nameRegExp = /^[aA-zZ\s]+$/;
const phoneRegExp = /^[0-9\b]+$/;

const billingAddressSchema = yup.object().shape({
  fullname: yup
    .string()
    .matches(nameRegExp, "Please Enter Valid Name")
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Please Enter Your Name"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Please Enter Your Email"),
  mobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .required("Required"),
  alternateMobile: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10, "Phone number is not valid"),
  // .required("Required"),
  address: yup
    .string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address2: yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  // .required("Required"),
  //   pincode: yup.number().min(6, "Must be 6 digit").required("Enter Pincode"),
  pincode: yup.string().required("Enter Pincode").length(6, "Must be 6 digit"),
});

export default billingAddressSchema;

// const initialValues = {
//   fullName: "",
//   email: "",
//   mobile: "",
//   alternateMobile: "",
//   address: "",
//   address2: "",
//   state: "",
//   district: "",
//   pincode: "",
// };
