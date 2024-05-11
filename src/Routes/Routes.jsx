import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home';
import Registration from '../pages/authentication/Registration';
import Login from '../pages/authentication/Login';
import AddBlogs from '../pages/AddBlogs';


// import ErrorPage from '../Pages/ErrorPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element:<Home></Home>,
            // loader: () => fetch(`${import.meta.env.VITE_APP_URL}/jobs`)
          },
          {
            path:'/registration',
            element:<Registration></Registration>,
          },
          {
            path:'/login',
            element:<Login></Login>,
          },
          {
            path:'/add-blog',
            element:<AddBlogs></AddBlogs>
          },
         
        ]
    },
])

export default router;