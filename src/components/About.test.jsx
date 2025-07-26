/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import About from "./About";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

test("Should load About Me heading", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <About />
      </Provider>
    </MemoryRouter>
  );

  const heading = screen.getByRole("heading", { name: /about me/i });
  expect(heading).toBeInTheDocument();
});
