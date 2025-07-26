/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import { expect } from "vitest";

test("Header should load logo", () => {
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </MemoryRouter>
  );

  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
});

it("Should change login button to logout on click",()=>{
  render(
    <MemoryRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </MemoryRouter>
  )

  const loginBtn = screen.getByRole("button",{name:"Login"});

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button",{name:"Logout"})

  expect(logoutBtn).toBeInTheDocument();
});