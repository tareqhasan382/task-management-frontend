import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import App from "../App";
import NotFound from "../screens/NotFound";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AllTodo from "../components/AllTodo";
import PendingTask from "../components/PendingTask";
import CompletedTask from "../components/CompletedTask";
import PrivateRoute from "../context/PrivateRoute";
import TaskManagement from "../components/TaskManagement";
import SignIn from "../components/SignIn";
import Register from "../components/Register";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/todo",
        element: <AllTodo />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/task",
        element:<PrivateRoute><TaskManagement/> </PrivateRoute>,
      },
      {
        path: "/pending",
        element: <PendingTask />,
      },
      {
        path: "/complete",
        element: <CompletedTask />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  //   {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //       {
  //         path: "/dashboard",
  //         element: <AllFood />,
  //       },
  //       {
  //         path: "/dashboard/add",
  //         element: <FromPage />,
  //       },
  //     ],
  //   },
]);
export default routes;