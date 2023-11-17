import React from "react";
import Loadable from "./components/Loadable";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";

const HomePage = Loadable(lazy(() => import("./pages/HomePage")));

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "portfolio",
          element: <HomePage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
