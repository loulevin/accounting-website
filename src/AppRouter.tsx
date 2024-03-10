import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { PageLogin } from "./pages/PageLogin";
import { Page404 } from "./pages/Page404";
import { PageAccountsCharts } from "./pages/PageAccountsCharts";

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
      {
        path: "/accountschart",
        element: <PageAccountsCharts />,
      },
    ],
  },
]);

export default router;
