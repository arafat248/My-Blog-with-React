const CategoryBlog = ({ blogs, categoryId }) => {
    const filterBlogs = categoryId ? blogs.filter(blog => blog.category_id == categoryId): blogs
    return (
        <div className="py-4">{
            filterBlogs.map(blog => (
                <div className="items-center mb-3 flex gap-8 border border-gray-200 p-2">
                    <img className="w-20 border border-white rounded-md" src={blog.image} alt="" />
                    <div>
                        <p className="">{blog.title}</p>
                            <p className="text-xs text-gray-600">{blog.shortDescription}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default CategoryBlog;