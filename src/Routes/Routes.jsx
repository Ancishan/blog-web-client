import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home';
import Registration from '../pages/authentication/Registration';
import Login from '../pages/authentication/Login';
import AddBlogs from '../pages/AddBlogs';
import Wishlist from '../pages/Wishlist';
import ViewBlog from '../pages/ViewBlog';
import AllBlog from '../pages/AllBlog';
import PrivateRoute from './PrivateRoute';
import Featured from '../pages/Featured';


// import ErrorPage from '../Pages/ErrorPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            index: '/',
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
            element:<PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
          },
          {
            path:'/wishlist',
            element:<PrivateRoute><Wishlist></Wishlist></PrivateRoute>
          },
          {
            path:'/view/:id',
            element:<PrivateRoute><ViewBlog></ViewBlog></PrivateRoute>
          },
          {
            path:'/all-blogs',
            element:<PrivateRoute><AllBlog></AllBlog>,</PrivateRoute>
            // loader:() =>fetch(`${import.meta.env.VITE_APP_URL}/blogs`)

          },
          {
            path:'/featured',
            element :<PrivateRoute><Featured></Featured></PrivateRoute>,
          },
         
        ]
    },
])

export default router;