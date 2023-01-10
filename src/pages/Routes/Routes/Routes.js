
import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../../Pages/Home/Home/Home";
import Login from "../../../Pages/Login/Login";
// import DisplayError from "../../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        // errorElement: <Display,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;