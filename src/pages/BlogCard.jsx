import axios from "axios"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const BlogCard = ({ blog }) => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const { _id, blog_title, photo, category, short_description, description, date } = blog || {}

  const wishList = async () => {
    // Check if the user is logged in
    if (!user) {
      // Redirect to the login page
      navigate('/login');
      return;
    }
  
    const wishData = { blog_id: _id, user_id: user.email };
    try {
      // Check if the blog is already in the wishlist
      const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/wish-find/${user.email}`);
      const alreadyExists = data.some((wish) => wish.blog_id === _id);
      if (alreadyExists) {
        toast.error("This blog is already in your wishlist");
      } else {
        // If not, add it to the wishlist
        const response = await axios.post(`${import.meta.env.VITE_APP_URL}/wish-create`, wishData);
        console.log(response.data);
        toast.success("Added to Wishlist successfully");
        navigate('/wishlist');
      }
    } catch (error) {
      console.error('Error creating wish:', error);
    }
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"data-aos-duration="3000" data-aos-delay="0">
      <figure><img className="h-96 w-full object-cover" src={photo} alt="blog image" /></figure>
      <div className="card-body">
        <div className="flex gap-6 items-center">
          <h1 className=' text-lg font-semibold text-gray-800 '>
            {blog_title}
          </h1>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
        <p>{short_description}</p>
        <div className="card-actions flex justify-between text-2xl font-bold text-blue-500 ">
          <Link to={`/view/${_id}`} className="">
            View Details
          </Link>
          {user && (
            <button type="button" onClick={wishList} className="">Wishlist</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
