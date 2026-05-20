import { useEffect, useState } from "react";
import Blogs from "./HomeComponent/Blogs";
import Category from "./HomeComponent/Category";
import  CategoryBlog  from "./HomeComponent/CategoryBlog";

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])

  const [category, setCategoty] = useState([])
  useEffect(() => {
    fetch("category.json")
    .then(res => res.json())
    .then(data => setCategoty(data))
  },[])

  return (
    <div className="container mx-auto px-24">
      <div className="grid grid-cols-16 gap-4 py-10">
          <div className="col-span-10 border px-4 py-4">
            <Blogs></Blogs>
          </div>
          <div className="col-span-6 border px-4 py-4">
            <Category category={category}></Category>
            <CategoryBlog blogs={blogs}></CategoryBlog>
          </div>
      </div>
    </div>
  )
}
export default Home;