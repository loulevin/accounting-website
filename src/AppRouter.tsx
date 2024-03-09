import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageLogin } from "./pages/PageLogin";
import { Page404 } from "./pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404 />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <PageLogin />,
      },
    ],
  },
]);

export default router;
