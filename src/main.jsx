import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import "./assets/style.css";
import LandingPage from "./pages/LandingPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AllPost from "./pages/AllPost.jsx";
import PrivateRoutes from "./utils/private.routes.jsx";
import IsAuth from "./utils/isAuth.jsx";
import AddPost from "./pages/AddPost.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import EditPost from "./pages/EditPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    element: <IsAuth />,
    children: [
      {
        path: "/auth/login",
        element: <SigninPage />,
      },
      {
        path: "/auth/register",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/explore",
    element: <LandingPage />,
  },
  {
    path: "/explore/article/:id",
    element: <ArticlePage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/all-post",
        element: <AllPost />,
      },
      {
        path: "/dashboard/add-post",
        element: <AddPost />,
      },
      {
        path: "/dashboard/edit-post/:id",
        element: <EditPost />,
      },
      {
        path: "/dashboard/category-post",
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
