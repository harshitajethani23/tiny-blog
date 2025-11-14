import axios from "axios";
import {useEffect,useState} from "react"

import {useParams} from "react-router"
import MarkdownEditor from "@uiw/react-markdown-editor";

function ReadBlog() {
    const {slug} = useParams();
    const [blog,setBlog] = useState({});

    const fetchBlog = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`);
        setBlog(response.data.data);
    };
    useEffect(()=>{fetchBlog();},[]);

    return(
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>
        <p className="mb-5">Published on:{""}
            {new Date(blog.publishedAt || blog.updatedAt).toLocaleString()}
        </p>
        <span className="text-xl bg-[#D35D6E] px-4 py-1 rounded-full text-white mb-5">{blog.category}</span>
        <MarkdownEditor.Markdown source={blog.content}  className="mt-5"/>
      </div>
    )
}
export default ReadBlog;