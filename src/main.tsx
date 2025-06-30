import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Intro from "./pages/Intro";
import Home from "./pages/Home";
import Tictactoe from "./pages/Tictactoe";
import Rock from "./pages/Rock";
import Coin from "./pages/Coin";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/main",
    element: <Layout />,
    children: [
      {
        path: "/main/home",
        element: <Home />,
      },
      {
        path: "/main/home/tic-tac-toe",
        element: <Tictactoe />,
      },
      {
        path: "/main/home/rock-paper-scissors",
        element: <Rock />,
      },
      {
        path: "/main/home/coin",
        element: <Coin />,
      },
      {
        path: "/main/home/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
