/* eslint-disable react/prop-types */

import axios from "axios"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const { user } = useAuth()
 
  const { _id, blog_title, photo, category, short_description,description, date } = blog || {}

  const wishList = async () => {
    const wishData = { blog_id: _id, user_id: user?.email };
    try {
      // Check if the blog is already in the wishlist
      const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/wish-find/${user?.email}`);
      const alreadyExists = data.some(wish => wish.blog_id === _id);
      if (alreadyExists) {
        toast.error("This blog is already in your wishlist");
      } else {
        // If not, add it to the wishlist
        const response = await axios.post(`${import.meta.env.VITE_APP_URL}/wish-create`, wishData);
        console.log(response.data);
        toast.success("Added to Wishlist successfully");
        navigate('/wishlist')
      }
    } catch (error) {
      console.error('Error creating wish:', error);
    }
  };
  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="h-96 w-full object-cover" src={photo} alt="blog image" /></figure>
      <div className="card-body">
      <div className="flex gap-6 items-center">
           <h1 className=' text-lg font-semibold text-gray-800 '>
              {blog_title}
            </h1>
            <p>{new Date(date).toLocaleDateString()}</p>
           </div>

        <p>{short_description}</p>
        <div className="card-actions ">
         
          <Link to={`/view/${_id}`} className="btn btn-outline btn-warning ">
                View Details
            </Link>
          <button type="button" onClick={wishList} className="btn btn-outline btn-warning ">Wishlist</button>
        
        </div>
      </div>
    </div>
    // 
  )
}

export default BlogCard