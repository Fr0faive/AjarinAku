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
import { AuthProvider } from "./services/auth.context.jsx";
import { Provider } from "react-redux"; // Import Provider
import store from "./Redux/store.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Post from "./pages/Post.jsx";
import PrivateRoutes from "./utils/private.routes.jsx";
import IsAuth from "./utils/isAuth.jsx";

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
        path: "/dashboard/post",
        element: <Post />,
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
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
