import React from "react";
import "./App.css";
import FormikForm from "./components/Form";
import FormInfo from "./components/FormInfo";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div className="App">
      <h1>Form Management</h1>
      <FormikForm />
      {/* <FormInfo /> */}
    </div>
  );
}

export default App;
