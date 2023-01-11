import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home/Home";
import Login from "../../Login/Login";
import DisplayError from "../../../pages/shared/DisplayError/DisplayError";
import SignUp from "../../SignUp/SignUp";
import Appointment from "../../Appointment/Appointment/Appointment";
import MyAppointment from "../../Dashboard/MyAppointment/MyAppointment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../../Layout/DashboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        errorElement: <DisplayError></DisplayError>,
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
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
        ]
    }
])

export default router;