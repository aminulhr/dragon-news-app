import { createBrowserRouter } from "react-router-dom";
import DetailseNews from "./Page/DetailseNews";
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
        loader: () => fetch("news.json"),
      },
      {
        path: "/news/:id",
        element: <DetailseNews></DetailseNews>,
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
