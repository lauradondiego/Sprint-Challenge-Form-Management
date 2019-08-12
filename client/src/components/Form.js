import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import CardInfo from "./CardInfo";
import "semantic-ui-css/semantic.min.css";

const UserForm = ({ errors, touched, status }) => {
  const [recipes, setRecipes] = useState([]);
  console.log(status);
  useEffect(() => {
    if (status) {
      setRecipes(status);
    }
  }, [status]);

  return (
    <div className="user-form">
      <h1>Register Now!</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Submit</button>
      </Form>
      <CardInfo recipes={recipes} />
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required!"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required!")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    axios.post("http://localhost:5000/api/register", values).then(response => {
      console.log("register data", response.data);
      resetForm();
    });
    axios
      .get("http://localhost:5000/api/restricted/data")
      .then(response => {
        const recipes = response.data;
        console.log("Recipes Data", recipes);
        setStatus(response.data);
      })

      .catch(error => console.log("error", error.response));
  }
})(UserForm);

export const add = (a, b) => {
  return a + b;
};

export default FormikForm;
