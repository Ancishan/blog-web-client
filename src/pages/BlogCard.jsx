/* eslint-disable react/prop-types */

import axios from "axios"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const BlogCard = ({ blog }) => {
  // const navigate = useNavigate()
  const { user } = useAuth()
  console.log(user?.email)
  const { _id, blog_title, photo, category, short_description,description, date } = blog || {}

  // creating wish
  const wishList = async () => {
    const wishData = { blog_id: _id, user_id: user?.email };
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_APP_URL}/wish-create`, wishData);
      console.log(data);
    } catch (error) {
      console.error('Error creating wish:', error);
    }
  };

  return (

    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="h-96 w-full object-cover" src={photo} alt="blog image" /></figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
            {blog_title}
          </h1>
          <div className="badge badge-secondary">{category}</div>
        </div>

        <p>{short_description}</p>
        <div className="card-actions ">
          <p>{new Date(date).toLocaleDateString()}</p>
          <div className="badge badge-outline">Details</div>
          <button type="button" onClick={wishList} className="badge badge-outline">Wishlist</button>
        
        </div>
      </div>
    </div>
    // 
  )
}

export default BlogCard