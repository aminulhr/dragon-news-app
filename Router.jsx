import { createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Root from "./src/Componensts/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
