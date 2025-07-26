import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Body from "./Body";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Cart from "./Cart";
import Error from "./Error";
import { lazy, Suspense } from "react";

// Lazy load About component
const About = lazy(() => import("./About"));

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h2>Loading About Page...</h2>}>
            <About />
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
