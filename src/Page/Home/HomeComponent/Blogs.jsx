import BlogCard from "./BlogCard";

const Blogs = ({blogs}) => {
    return (
        <div className="py-4">
            {
                blogs.map(blog => (
                    <BlogCard blog={blog} />
                ))
            }
        </div>
    )
}
export default Blogs;   