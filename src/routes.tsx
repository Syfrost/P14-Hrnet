import { createHashRouter } from "react-router-dom";
import { ProfileForm } from "./pages/form";
import Employees from "./pages/employees";

export const router = createHashRouter([
    { path: '/', element: <ProfileForm /> },
    { path: '/list', element: <Employees /> },
]);