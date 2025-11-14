function BlogCard({
        
    title,
        content,
        author,
        createdAt,
        updatedAt,
        status,
        category,
        slug,
}) {
    return (
        <div className="border p-4 my-4 rounded-md relative">
            <h2>{title}</h2>
            <p>Author:{author.name}</p>
            <p>Created At: {new Date(createdAt).toLocaleString()}</p>
            <span className="absolute top-2 right-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-md">Category:{category}</span>
        </div>
    )
}

export default BlogCard;