
// import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";

import TabCategory from "./TabCategory";

// import BlogCard from "./BlogCard";

const AllBlog = () => {
    // const LoaderBlog = useLoaderData();
    // const [allBlog] = useState(LoaderBlog);

    // console.log(allBlog);
    return (
    //  <div className="pt-32">
    //     <h2 className="text-3xl font-bold text-center pb-6"> Here All Blog </h2>
    //        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
    //         {allBlog.map((blog) => (
    //             <BlogCard key={blog._id} blog={blog}></BlogCard>
    //         ))}
    //     </div>
    //  </div>
    <div className="pt-32">
        <h2 className="text-3xl font-bold text-center pb-6">ALL Blog In</h2>
        <TabCategory></TabCategory>
        </div>
    );
};

export default AllBlog;
