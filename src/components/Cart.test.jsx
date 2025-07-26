/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice";

test("Cart should display empty message on initial load", () => {
  // Create a test Redux store with empty cart
  const testStore = configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        items: [],
      },
    },
  });

  render(
    <MemoryRouter>
      <Provider store={testStore}>
        <Cart />
      </Provider>
    </MemoryRouter>
  );

  // Check for the empty cart message
  const emptyMessage = screen.getByText("Your cart is empty.");
  expect(emptyMessage).toBeInTheDocument();
});
