import React from "react";
import { render } from "@testing-library/react-native";
import HelloWorld from "../../components/HelloWorld";

describe("Component is properly rendered", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<HelloWorld />);
    const text = getByText(/Hello World/i);
    expect(getByText("Hello World")).toBeTruthy();
  });
});
