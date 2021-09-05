import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

describe("App.js is rendered properly", () => {
  it("App is rendered", () => {
    const rendered = render(<App />);
    // console.log(rendered);
    expect(rendered.queryByTestId("app")).toBeDefined();
  });

  it("Text in App.js is rendered properly", () => {
    const { get } = render(<App />);
    const text = getByTestId("headerText");
    expect(text).toHaveTextContent("Merhaba Ekip");
  });
});
