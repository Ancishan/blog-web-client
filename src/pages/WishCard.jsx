import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WishCard = ({ wish }) => {
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
                </div>
              </div>
            </div>
          )}
      </div>
      
    );
};

export default WishCard;
