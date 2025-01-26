import { createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
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
    ],
  },
]);
export default router;
