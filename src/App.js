import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(10, "Must be 10 letters or less")
          .required("required"),
        lastName: Yup.string()
          .max("10", "Must be 10 letters or less")
          .required("required"),
        email: Yup.string().email("Invalid email address").required("required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 600);
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="FirstName">First Name</label>
            <input
              type="text"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <p>{formik.errors.firstName}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="LastName"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <p>{formik.errors.lastName}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p>{formik.errors.email}</p>
            ) : null}
          </div>

          <button type="submit">Subscribe</button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
