import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from "flowbite-react";
const WishCard = ({ wish, onDelete }) => {
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/blogs/${wish.blog_id}`);
                setBlog(data);
            } catch (error) {
                console.error('Error fetching blog data:', error);
            }
        };

        if (wish.blog_id) {
            fetchBlogData();
        }
    }, [wish]);

    const handleDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_APP_URL}/wishes/${wish._id}`);
            onDelete(wish._id); // Update local state in parent component to remove the deleted wish
            toast.success("Removed from Wishlist successfully");
        } catch (error) {
            console.error('Error deleting wish:', error);
        }
    };

    return (
        <div>  
          {blog && (
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img className="h-64 md:h-72 lg:h-96 w-full object-cover" src={blog?.photo} alt="blog image" />
              </figure>
              <div className="card-body">
                <div className="flex justify-between">
                  <h1 className="mt-2 text-lg font-semibold text-gray-800">{blog?.blog_title}</h1>
                  <div className="badge badge-secondary">{blog?.category}</div>
                </div>
                <p>{blog?.short_description}</p>
                <p>{blog?.description}</p>
                <div className="card-actions">
                  <p>{blog?.date && new Date(blog.date).toLocaleDateString()}</p>
                  <button type="button" onClick={handleDelete} className="text-red-600">Delete</button>
                </div>
              </div>
            </div>
          )}
      </div>
      
    );
};

export default WishCard;
