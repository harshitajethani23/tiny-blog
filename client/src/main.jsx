
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import AllBlogs from "./views/AllBlogs";
import EditBlog from "./views/EditBlog";
import NewBlog from "./views/NewBlog";
import ReadBlog from "./views/ReadBlog";

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element = {<AllBlogs />} />
  <Route path="/new" element = {<NewBlog />} />
  <Route path="/edit/:id" element = {<EditBlog />} />
  <Route path="/blog/:slug" element = {<ReadBlog />} />
 </Routes>
 </BrowserRouter>
)
