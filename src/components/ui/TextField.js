import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  //   console.log("field", field);
  //   console.log("meta", meta);
  //   console.log("props", props);
  //   console.log("useField", useField);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
export default TextField;
