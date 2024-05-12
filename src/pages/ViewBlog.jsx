import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewBlog = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});

    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_APP_URL}/view/${id}`)
    //         .then(response => response.json()) // Convert response to JSON
    //         .then(data => {
    //             setDetails(data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         });
    // }, [id]);


      useEffect(() =>{
        const getData = async() =>{
            const {data} = await axios.get(`${import.meta.env.VITE_APP_URL}/view/${id}`)
            setDetails(data)
        }
        getData()
    }, [])
    
    return (
        <div className="card w-full bg-base-100 shadow-xl pt-32">
        <figure><img className="h-full w-full " src={details?.photo} alt="blog image" /></figure>
        <div className="card-body">
          <div className="flex justify-between">
           <div className="flex gap-6 items-center">
           <h1 className=' text-lg font-semibold text-gray-800 '>
              {details?.blog_title}
            </h1>
            <p>{details?.date && new Date(details.date).toLocaleDateString()}</p>
           </div>
            <div className="badge badge-secondary">{details?.category}</div>
          </div>
  
          <p>{details?.short_description}</p>
          <p>{details?.description}</p>
        
        </div>
      </div>
    );
};

export default ViewBlog;