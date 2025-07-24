import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart"; 
import Error from "./Error"; 

import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./Grocery"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />, 
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h2>Loading Grocery Page...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart", 
        element: <Cart />,
      },
    ],
  },
]);

export default AppRouter;
