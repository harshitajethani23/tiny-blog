
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import AllBlogs from "./views/AllBlogs";
import EditBlog from "./views/EditBlog";
import NewBlog from "./views/NewBlog";
import ReadBlog from "./views/ReadBlog";
import Signup from "./views/Signup";
import Login from "./views/Login";

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element = {<AllBlogs />} />
  <Route path="/new" element = {<NewBlog />} />
  <Route path="/edit/:slug" element = {<EditBlog />} />
  <Route path="/blogs/:slug" element = {<ReadBlog />} />
   <Route path="/login" element = {<Login />} />
    <Route path="/Signup" element = {<Signup />} />
 </Routes>
 </BrowserRouter>
)
