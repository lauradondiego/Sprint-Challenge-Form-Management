import React from "react";
import CardInfo from "./CardInfo";
import { render } from "@testing-library/react";

describe("<CarInfo />", () => {
  it("renders data passed as a prop", () => {
    const inputData = [{
      id: 1,
      name: "cheese",
      course: "breakfast",
      technique: "easy",
      ingredients: "milk"
    }];

    const card = render(<CardInfo recipes={inputData} />);

    const cards = card.getAllByTestId("card");
    expect(cards).toHaveLength(inputData.length);
  });
});
