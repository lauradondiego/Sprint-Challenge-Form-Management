// import { render } from "@testing-library/react";
// import "@testing-library/react/cleanup-after-each";
// import React from "react";
// import App from "./App";
import { add } from "./Form";

describe("<Form />", () => {
  it("renders the POST info", () => {
    expect(add(3, 2)).toBe(5);
  });
});
