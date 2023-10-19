import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <SignupPage/>
  },
  {
    path: "/login",
    element: <SigninPage/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
