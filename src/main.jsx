import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ClassSchedule from './Pages/ClassSchedule';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ClassSchedule></ClassSchedule>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
