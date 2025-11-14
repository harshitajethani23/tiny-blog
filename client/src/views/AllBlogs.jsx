import {Link} from "react-router"

import {useState,useEffect} from "react";
import {getCurrentUser} from "./../util";

import axios from "axios";

function AllBlogs() {

    const [user,setUser] = useState(null);
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
        setBlogs(response.data.data);
    };

    useEffect(()=>{
       setUser(getCurrentUser());
       fetchBlogs();
    },[])
    return(
        <div>
            <h1>AllBlogs</h1>
            {user ? `Hello ${user.name}!`:`Welcome Guest`}

            <div className="container mx-auto p-4">
                {blogs.map((blog)=>{

                    const {
                        _id,
                        title,
                        author,
                        updatedAt,
                        createdAt,
                        status,
                        category,
                        slug,
                    } = blog;
                   
                    return (
                
        <div className="border p-4 my-4 rounded-md relative bg-[#D35D6E]">
            <h2>{title}</h2>
            <p>Published by : {author.name}</p>
            <p>Created At: {new Date(createdAt).toLocaleString()}</p>
            <span className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded-md">{category}
       </span>

      

       <Link 
       className="absolute bottom-2 right-2 px-2 py-1 bg-white text-black"
       to={`/blogs/${slug}`}>
        Read More</Link>
        
       <Link 
       className="absolute bottom-2 right-27 px-2 py-1 bg-white text-black"
       to={`/edit/${slug}`}>
        Edit Blog</Link>
        </div>
    )
     })}
            </div>
          <Link 
       className="absolute bottom-2 right-5 px-2 py-1 px-3 bg-[#D35D6E] text-black rounded-md"
       to={"/new"}>
        Add New Blog</Link>
        
        </div>  

    
    )
}
export default AllBlogs;