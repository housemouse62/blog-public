import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CreateUser from "./CreateUser.jsx";
import Login from "./Login.jsx";
import Blog from "./Blog.jsx";
import Post from "./Post.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
      {
        path: "/posts",
        element: <Blog />,
      },
      {
        path: "/posts/:postID",
        element: <Post />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
