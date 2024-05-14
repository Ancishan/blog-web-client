// import JobCard from '../components/JobCard'

import axios from "axios"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

const AllBlog = () => {
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')
    const [blogs, setblogs] = useState([])
 
    useEffect(() =>{
        const getData = async() =>{
            const {data} = await axios(`${import.meta.env.VITE_APP_URL}/all-blogs?page=${currentPage}&size=${itemPerPage}&filter=${filter}&search=${search}`)
            setblogs(data)
         
        }
        getData()
    }, [currentPage, itemPerPage, filter,search])

    useEffect(() =>{
        const getCount = async() =>{
            const {data} = await axios(`${import.meta.env.VITE_APP_URL}/blogs-count?filter=${filter}&search=${search}`)
            
            setCount(data.count)
        }
        getCount()
    }, [filter])

// console.log(count)
const numberOfPages = Math.ceil(count / itemPerPage)
  const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

// handle pagination
const handlePaginationButton=(value) =>{
    // console.log(value)
    setCurrentPage(value)

}
// handle Reset
const handleReset = () =>{
    setFilter('')
    setSearch('');
    setSearchText('')
}
const handleSearch = e =>{
    e.preventDefault()
    // const text = e.target.search.value
    setSearch(searchText);
}
// console.log(search)
  return (
    <div className='container pl-16 pt-32 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <h2 className="text-3xl font-bold pt-10 pb-16 text-center">This Whole Blog Is For You</h2>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
             onChange={e => {
                setFilter(e.target.value)
                setCurrentPage()
            }}
             value={filter}
              name='category'
              id='category'             
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Tourist Place'>Tourist Place</option>
              <option value='Food Blog'>Food Blog</option>
              <option value='Flower Genre'>Flower Genre</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={(e) =>setSearchText(e.target.value)}
                value={searchText}
                name='search'
                placeholder='Enter Blog Title'
                aria-label='Enter Blog Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
       
          <button onClick={handleReset} className='btn'>Reset</button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10'>
          {blogs.map(blog => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>

      <div className='flex justify-center mt-12'>

        {/* previous section */}
        <button
        disabled={currentPage === 1}
       onClick={() =>handlePaginationButton (currentPage - 1)}
        className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>

          {/* page */}
        {pages.map(btnNum => (
          <button
          onClick={() =>handlePaginationButton (btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? 'bg-blue-500 text-white' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* Next Button */}
        <button
         disabled={currentPage === numberOfPages}
        onClick={() =>handlePaginationButton (currentPage + 1)}
        className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default AllBlog