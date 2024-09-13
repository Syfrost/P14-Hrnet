import {createBrowserRouter} from "react-router-dom";
import  {ProfileForm} from "./pages/form";
import Employees from "@/pages/employees.tsx";

export const router = createBrowserRouter([
    {path: '/', element: <ProfileForm/>},
    {path: '/list', element: <Employees/>},
    //{path: '/employees', element: <employees />},
])