const BlogCard = ({ blog }) => {
return (
    <div className="border border-gray-200 rounded-md mb-8 mx-3">
    <div className="card flex flex-col lg:flex-row items-center py-2 lg:py-0 card-side bg-base-100 shadow-sm">
        <img
        className="w-64 h-64 rounded-md object-cover"
        src={blog.image}
        alt="Blog"
        />

        <div className="px-4 my-6 flex flex-col justify-between lg:gap-4">
        <h2 className="card-title text-xl">{blog.title}</h2>

        <div className="flex gap-6 text-gray-500 text-sm">
            <p>{blog.author.name}</p>
            <p>{blog.date}</p>
        </div>

        <p className="text-gray-500">{blog.shortDescription}</p>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-3">
            <div className="flex gap-4 items-center text-xs text-gray-500">
            <p>Read Time {blog.read_time} Minutes</p>
            <p>Total Views {blog.views}</p>
            </div>

            <button
            className="btn bg-[#FB5875] text-white py-1 rounded-md px-3 cursor-pointer font-normal"
            onClick={() =>
                document.getElementById(`modal_${blog.id}`).showModal()
            }
            >
            Read Blog
            </button>

            <dialog id={`modal_${blog.id}`} className="modal">
            <div className="modal-box w-[95%] max-w-4xl h-fit p-4 sm:p-6 overflow-y-auto">
                <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                </button>
                </form>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
                <img
                    className="w-full lg:w-64 h-60 rounded-md object-cover"
                    src={blog.image}
                    alt="Blog"
                />

                <div className="flex flex-col justify-between w-full">
                    <h2 className="card-title text-lg sm:text-xl mb-2">
                    {blog.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-gray-500 text-sm mb-2">
                    <p>{blog.author.name}</p>
                    <p>{blog.date}</p>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {blog.longDescription}
                    </p>

                    <div className="flex flex-wrap justify-between items-center mt-4 text-xs sm:text-sm text-gray-500">
                    <p>Read Time: {blog.read_time} Minutes</p>
                    <p>Total Views: {blog.views}</p>
                    </div>
                </div>
                </div>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>
        </div>
    </div>
    </div>
);
};

export default BlogCard;