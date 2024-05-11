import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../src/hooks/useAuth";

import toast from "react-hot-toast";
import axios from "axios";


const AddBlogs = () => {
    const [startDate, setStartDate] = useState(new Date());
    // const navigate = useNavigate()
    const { user } = useAuth()

    const handleFormSubmission = async e => {
        e.preventDefault()
        const form = e.target
        const job_title = form.job_title.value
        const photo = form.photoURL.value
        const description = form.description.value
        const category = form.category.value
        const date = startDate
        const email = form.email.value
 

        const BlogData = {
            date,
            email,
            photo,
            description,
            category,
            job_title,
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_APP_URL}/blog`, BlogData)
            console.log(data)
            toast.success('job data Updated successfully')
            // navigate('/my-posted-jobs')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-28'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-bold text-gray-700 capitalize text-center py-6 '>
                    Add Your Blog
                </h2>

                <form onSubmit={handleFormSubmission}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Job Title
                            </label>
                            <input
                                id='job_title'
                                name='job_title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='photoURL'>
                            Photo Url
                            </label>
                            <input  id='photoURL' type="text" placeholder="photo URL" name="photoURL"  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' required />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='email'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Date</label>

                            <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                name='category'
                                id='category'
                                className='border p-2 rounded-md w-full'
                            >
                                <option value='Tourist Place'>Tourist Place</option>
                                <option value='Food Blog'>Food Blog</option>
                                <option value='Flower Genre'>Flower Genre</option>
                            </select>
                        </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                            id='description'
                        ></textarea>
                    </div>
                    <div className=' mt-6'>
                        <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 w-full'>
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddBlogs