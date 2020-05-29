import React from "react";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.firstName) {
    errors.firstName = "First name cannot be empty";
  } else if (values.firstName.length < 3) {
    errors.firstName = "First name cannot be less the 3 characters";
  }

  if (!values.lastName) {
    errors.lastName = "First name cannot be empty";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Last name cannot be less the 3 characters";
  }

  return errors;
};

const SignUp = () => {
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "" },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            type="email"
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label>First Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="firstName"
            type="text"
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p>{formik.errors.firstName}</p>
          ) : null}
        </div>
        <div>
          <label>Last Name</label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="lastName"
            type="text"
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p>{formik.errors.lastName}</p>
          ) : null}
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SignUp;
