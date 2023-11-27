import { useState } from "react";
import { Button } from "../component/Button";
import InputField from "../component/InputField";
import CategoryService from "../services/category.service";

const PostContent = () => {
  const handlePost = async (e) => {
    e.preventDefault();
    console.log(categoryData);
    const token = localStorage.getItem("Authorization");
    console.log(token);
    try {
      const result = await CategoryService.createCategory(categoryData, token);
      console.log(result);
      alert("Category created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const [categoryData, setCategoryData] = useState({ category_name: "" });

  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handlePost}>
      <div className="flex flex-col bg-white p-10 rounded-lg gap-4 text-black">
        <h1 className="text-3xl font-bold">POST CONTENT</h1>
        <label>Category</label>
        <InputField
          type="text"
          name="category_name"
          placeholder="Choose the category"
          onChange={handleChange}
        />
        <Button value="Post" type="submit" color="primary" />
      </div>
    </form>
  );
};

export default PostContent;
