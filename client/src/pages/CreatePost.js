import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Createpost() {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    description: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("you have to write TITLE"),
    description: Yup.string().required("you have to write DESCRIPTION"),
    username: Yup.string().required("you have to write USERNAME"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      navigate("/");
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
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="title"
          />
          <label>Description:</label>
          <ErrorMessage name="description" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="description"
            placeholder="description"
          />
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="username"
            placeholder="username"
          />
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Createpost;
