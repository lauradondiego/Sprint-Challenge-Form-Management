import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const UserForm = ({ errors, touched, status }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div className="user-form">
      <h1>Register Now!</h1>
      <Form>
        {/* <div>{users.map(eachUser => (user = { eachUser }))}</div> */}
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Submit!</button>
      </Form>

      <Card>
        <Card.Content>
          <Card.Header>Recipes:</Card.Header>
          {user.map(recipe => (
            <div key={recipe.id}>
              <p>Name: {recipe.name}</p>
              <p>Course: {recipe.course} </p>
              <p>Technique: {recipe.technique} </p>
              <p>Ingredients: {recipe.ingredients} </p>
            </div>
          ))}
        </Card.Content>
      </Card>
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
      setStatus(response.data);
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

export default FormikForm;
