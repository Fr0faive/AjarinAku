import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import "./assets/style.css";
import ProductPage from "./pages/LandingPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { AuthProvider } from "./services/auth.context.jsx";
import { Provider } from "react-redux"; // Import Provider
import store from "./Redux/store.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <SigninPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/explore",
    element: <ProductPage />,
    canActivate: ({ state }) => state.auth.isAuthenticated, // Check authentication status
  },
  {
    path: "/article",
    element: <ArticlePage />,
    canActivate: ({ state }) => state.auth.isAuthenticated, // Check authentication status
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
    canActivate: ({ state }) => state.auth.isAuthenticated, // Check authentication status
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
