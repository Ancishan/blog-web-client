import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import BlogCard from './BlogCard';
import { useEffect, useState } from 'react';
import axios from 'axios'
import BlogCard from './BlogCard';
const TabCategory = () => {
    const [blogs, setblogs] = useState([])
    useEffect(() =>{
        const getData = async() =>{
            const {data} = await axios(`${import.meta.env.VITE_APP_URL}/blogs`)
            setblogs(data)
        }
        getData()
    }, [])
    return (
        <Tabs>
          
            <div className='container px-6 py-10 mx-auto'>
            <h2 className='text-center text-3xl font-extrabold text-blue-500 '>Browse blog by Category</h2>
                <div className='flex items-center text-xl font-semibold md:text-2xl md:font-bold text-blue-500 justify-center pt-6'>
                    <TabList>
                        <Tab>Tourist Place</Tab>
                        <Tab>Food Blog</Tab>
                        <Tab>Flower Genre</Tab>
                    </TabList>
                </div>

                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full pl-10 pt-10'>
                  {blogs
                .filter(j => j.category === 'Tourist Place')
                  .map(blog =>(
                  <BlogCard key={blog._id} blog={blog}></BlogCard>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {blogs
                .filter(j => j.category === 'Food Blog')
                  .map(blog =>(
                  <BlogCard key={blog._id} blog={blog}></BlogCard>
                  ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  {blogs
                .filter(j => j.category === 'Flower Genre')
                  .map(blog =>(
                  <BlogCard key={blog._id} blog={blog}></BlogCard>
                  ))}
                  </div>
                </TabPanel>
            </div>
        </Tabs>

    );
};

export default TabCategory;
