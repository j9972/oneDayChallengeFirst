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
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("you have to write TITLE"),
    description: Yup.string().required("you have to write DESCRIPTION"),
  });

  const onSubmit = (data) => {
    navigate("/");
  };

  return (
    <div className="createPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="createContainer">
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field
            autoComplete="off"
            id="createInput"
            name="title"
            placeholder="title"
          />
          <label>Description:</label>
          <ErrorMessage name="description" component="span" />
          <Field
            autoComplete="off"
            id="createInput"
            name="description"
            placeholder="description"
          />
          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Createpost;
