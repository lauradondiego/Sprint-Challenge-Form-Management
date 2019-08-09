import Form from "./Form";

describe("<Form />", () => {
  it("renders a welcome message", () => {
    const playersData = [
      { id: 1, name: "LeBron James" },
      { id: 2, name: " Donovan Mitchell" },
      { id: 3, name: "Uncle Drew" }
    ];

    const comp = render(<Form players={playersData} />);

    const players = comp.getAllByTestId("player");
    expect(players).toHaveLength(playersData.length);
  });
});
