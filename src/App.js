import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom"; // Change to createHashRouter
import Layout from "./components/layout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  const router = createHashRouter([ // Switch to createHashRouter
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          index: true,
          path: "/gallery",
          element: <Gallery />,
        },
        {
          index: true,
          path: "/about-us",
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
