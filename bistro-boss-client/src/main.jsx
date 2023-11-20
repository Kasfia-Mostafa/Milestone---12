import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Homepage/Home.jsx";
import Menu from "./Pages/Menu/Menu/Menu.jsx";
import { HelmetProvider } from "react-helmet-async";
import Order from "./Pages/Order/Order/Order.jsx";
import Login from "./Pages/Login/Login.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import Secret from "./Pages/Secret/Secret.jsx";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import DashBoard from "./Layout/DashBoard/DashBoard.jsx";
import Cart from "./Pages/DashBoard/Cart/CArt.jsx";
import AllUsers from "./Pages/AllUsers/Allusers.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: 'dashBoard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: 'cart',
        element:<Cart></Cart>
      },
      // admin routes
      {
        path: 'users',
        element:<AllUsers></AllUsers>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
