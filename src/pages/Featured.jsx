import React from 'react';
import axios from 'axios';


const Featured = () => {
    const [blogs, setBlogs] = React.useState([]);
    const [error, setError] = React.useState(null);


    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_APP_URL}/all-blogs`);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
                setError(error.message || 'An error occurred while fetching blogs');
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='container pl-16 pt-32 mx-auto min-h-[calc(100vh-306px)]'>
            <h2 className="text-3xl font-bold pt-10 pb-16 text-center">Top 10 Blogs</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Author Name</th>
                        <th className="px-4 py-2">Author Image</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <tr key={blog._id}>
                            <td className="border px-4 py-2">{blog.blog_title}</td>
                            <td className="border px-4 py-2">{blog.description}</td>
                            <td className="border px-4 py-2">{blog.author && blog.author.displayName}</td>
                            <td className="border px-4 py-2">
                                {blog.author && <img src={blog.author.photoURL} alt="Author" />}
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default Featured;
