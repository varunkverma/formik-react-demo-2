import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const YouTubeForm = () => {
  const YouTubeFormSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("email is required"),
    channel: Yup.string().required("channel name is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    validationSchema: YouTubeFormSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className="form-control">
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <div className="form-control">
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            name="channel"
            id="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
