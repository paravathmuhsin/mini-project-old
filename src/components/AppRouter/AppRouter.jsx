import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

const Login = lazy(() => import("../../pages/Login/Login"));
const Posts = lazy(() => import("../../pages/Post/Posts"));
const PostsDetails = lazy(() => import("../../pages/Post/Details"));
const Layout = lazy(() => import("../../components/Layout/Layout"));
const Todo = lazy(() => import("../../pages/Todo/Todo"));
const TodoDetail = lazy(() => import("../../pages/Todo/TodoDetail"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts/:id",
        element: <PostsDetails />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "todo/:id",
        element: <TodoDetail />,
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
