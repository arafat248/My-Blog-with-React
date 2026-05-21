const Category = ({category, handleCategoryId}) => {
    return (
        <div className="flex flex-wrap gap-3 py-4">
            {
                category.map(category => (
                    <div className="border border-gray-200 px-4 py-2 rounded-md">
                        <p onClick={() => handleCategoryId(category.id)} className="cursor-pointer">{category.name}</p>
                    </div>
                ))
            }
        </div>
    );
};
export default Category;