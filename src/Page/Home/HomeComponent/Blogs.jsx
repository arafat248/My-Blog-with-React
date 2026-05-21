const blogs = ({blogs}) => {
    return (
        <div className="py-4">
            {
                blogs.map(blog => (
                    <div className="items-center mb-3 flex gap-8 border border-gray-200 p-2 rounded-md shadow shadow-gray-800">
                        <img className="w-80 border border-white rounded-md" src={blog.image} alt="" />
                        <div>
                            <p className="text-lg">{blog.title}</p>
                            <p className="text-xs text-gray-600">{blog.longDescription}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default blogs;   