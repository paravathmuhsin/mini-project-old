import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";


const Login = lazy(() => import("../../pages/Login/Login"));
const Comments = lazy(() => import("../../pages/Comment/Comments"));
const CommentsDetails = lazy(() => import("../../pages/Comment/Details"));
const Layout = lazy(() => import("../../components/Layout/Layout"));
const Posts = lazy(() => import("../../pages/Post/Posts"));
const PostsDetails = lazy(() => import("../../pages/Post/Details"));
const Users = lazy(() => import("../../pages/User/Users"));
const UserDetails = lazy(() => import("../../pages/User/UserDetails"));
const Listing = lazy(() => import("../../pages/Photos/Listing"));
const Photosdetails = lazy(() => import("../../pages/Photos/Photos"));
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
        path: "comments",
        element: <Comments />,
      },
      {
        path: "comments/:id",
        element: <CommentsDetails />,
      },{
        path: "todo",
        element: <Todo />,
      },
      {
        path: "todo/:id",
        element: <TodoDetail />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <UserDetails />,
      },
      {
        path: "photos",
        element: <Listing />,
      },
      {
        path: "photos/:id",
        element: <Photosdetails />,
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
