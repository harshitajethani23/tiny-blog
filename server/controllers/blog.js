import Blog from "./../models/Blog.js";

const postBlogs = async (req,res) => {
    const {title,category,content,author} = req.body;

    if (!title || !category || !author) {
        return res.status(400).json({
            success:false,
            message:"All fields are required",
        })
    }
  

    const newBlog = new Blog({
        title,
        category,
        content,
        author,
        slug:`temp-slug-${Date.now()}-${Math.random().toString()}`
    });

    const savedBlog = await newBlog.save();

    savedBlog.slug = `${title.toLowerCase().replace(/ /g,"-")}-${savedBlog._id}`.replace(/[^\w-]+/g,"");
    await savedBlog.save();

    res.status(201).json ({
        success:true,
        message:"Blog created successfully",
        blog:savedBlog,
    })
};

const getBlogs = async (req,res) => {
    const blogs = await  Blog.find().populate("author","_id name email").sort({
        createdAt: -1,
    })

    res.status(200).json({
        success:true,
        data:blogs,
        message:"Blogs fetched successfully",
    })
};
const getBlogForSlug = async (req,res)=>{
    const {slug} = req.params;

    const blog = await Blog.findOne({slug:slug}).populate(
        "author",
        "name _id email"
    );

    if (!blog) {
        return res.status(404).json({
            success:false,
            message:"Blog not found",
        })
    }
    res.status(200).json({
        success:true,
        data:blog,
        message:"Blog fetched successfully"
    })
};
export {getBlogs,postBlogs,getBlogForSlug};