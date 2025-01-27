import { createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
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
    ],
  },
]);
export default router;
