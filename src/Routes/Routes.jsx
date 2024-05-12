import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../pages/Home';
import Registration from '../pages/authentication/Registration';
import Login from '../pages/authentication/Login';
import AddBlogs from '../pages/AddBlogs';
import Wishlist from '../pages/Wishlist';
import ViewBlog from '../pages/ViewBlog';
import AllBlog from '../pages/AllBlog';


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
            element:<AddBlogs></AddBlogs>
          },
          {
            path:'/wishlist',
            element:<Wishlist></Wishlist>
          },
          {
            path:'/view/:id',
            element:<ViewBlog></ViewBlog>
          },
          {
            path:'/all-blogs',
            element:<AllBlog></AllBlog>,
            loader:() =>fetch(`${import.meta.env.VITE_APP_URL}/blogs`)

          },
         
        ]
    },
])

export default router;