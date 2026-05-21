import { useEffect, useState } from "react";
import Blogs from "./HomeComponent/Blogs";
import Category from "./HomeComponent/Category";
import  CategoryBlog  from "./HomeComponent/CategoryBlog";

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [category, setCategoty] = useState([])
  const [categoryId, setCategoryId] = useState()

  useEffect(() => {
    fetch("blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  useEffect(() => {
    fetch("category.json")
    .then(res => res.json())
    .then(data => setCategoty(data))
  },[])

  const handleCategoryId = (id) => {
    console.log(id)
    setCategoryId(id)
  }
  return (
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-16 gap-4 py-10">
          <div className="col-span-10 px-4 py-4">
            <Blogs blogs={blogs}></Blogs>
          </div>
          <div className="col-span-6 border-2 border-gray-400 px-4 py-4">
            <Category category={category} handleCategoryId={handleCategoryId}></Category>
            <CategoryBlog  blogs={blogs} categoryId={categoryId}></CategoryBlog>
          </div>
      </div>
    </div>
  )
}
export default Home;