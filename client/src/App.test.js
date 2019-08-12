import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("<App />", () => {
  it("renders without crashing component", () => {
    render(<App />);
  });

  it("display form management", () => {
    const x = render(<App />);
    const compare = x.getByText(/form management/i);
  });
});
