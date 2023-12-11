import { useEffect, useState } from "react";
import categoryService from "../../../services/category.service";

const CategoryElement = () => {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    categoryService.getAllCategory((data) => {
      setDataCategory(data);
    });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#EFF0F4] text-gray-900">
      <h1>Category</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {dataCategory.map((data) => (
            <tr>
              <td>{data.category_id}</td>
              <td>{data.category_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryElement;
