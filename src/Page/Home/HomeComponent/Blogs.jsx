const Blogs = ({ blogs }) => {
    return (
        <div className="flex flex-wrap gap-4">
            {
                blogs.map(blog => (
                    <div className="border border-gray-200 px-4 py-2 rounded-md" key={blog.id}>
                        <p>{blog.slug}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Blogs;