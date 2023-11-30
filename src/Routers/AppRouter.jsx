import { RouterProvider,  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import User from "../Pages/User/User";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UserProtected from "./UserProtected";
import Category from "../Pages/Category/Category";
import CategoryItems from "../Pages/CategoryItems/CategoryItems";




const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>,

      },
      {
        path:'Category',
        element:<Category/>,
        children:[

          {
            path:':categoryId',
            element:<CategoryItems/>,
          },
        ],

      },

      {
        element:<UserProtected/>,
        children:[

          {
            path:'user',
            element:<User/>,
          },
        ],
      },
    ],
  },
  {
    path:'/profile',
    element:<Login/>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router}/>;
};

export default AppRouter;