import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../pages/Login/Login"));
const Comments = lazy(() => import("../../pages/Comment/Comments"));
const CommentsDetails = lazy(() => import("../../pages/Comment/Details"));
const Layout = lazy(() => import("../../components/Layout/Layout"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Comments />,
      },
      {
        path: 'comments/:id',
        element: <CommentsDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default AppRouter;