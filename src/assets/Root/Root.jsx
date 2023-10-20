import { createBrowserRouter } from "react-router-dom";
import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";

    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainPage></MainPage>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:"/Login",
                element:<Login></Login>
            }
          ]
        },
      ]);
   


export default router;