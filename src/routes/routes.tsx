import { App } from "@components/index";
import { lazy } from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";

const Home = lazy(() =>
  import("../pages/home/Home").then((module) => ({ default: module.Home })),
);

// const Blog = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/Blog")), 3000);
//   });
// });

// const PageNotFound = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("../pages/PageNotFound")), 6000);
//   });
// });

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      { path: "*", element: <Home /> },
    ],
  },
]);
