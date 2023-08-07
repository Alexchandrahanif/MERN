import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import EditPage from "../pages/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddPage />,
  },
  {
    path: "/edit/:id",
    element: <EditPage />,
  },
]);

export default router;
