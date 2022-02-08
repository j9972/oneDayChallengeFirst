import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("you have to write EMAIL"),
    username: Yup.string().required("you have to write USERNAME"),
    password: Yup.string().required("you have to write PASSWORD"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/users", data).then((response) => {
      navigate("/login");
    });
  };

  return (
    <div className="createPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Email:</label>
          <ErrorMessage name="email" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="email"
            placeholder="email"
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="username"
          />
          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="password"
            placeholder="password"
          />
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
