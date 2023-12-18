import { useEffect, useState } from "react";
import categoryService from "../../../services/category.service";

import FormCategory from "./FormCategory";
import Modal from "../../Modal";
const CategoryElement = () => {
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    categoryService.getAllCategory((data) => {
      setDataCategory(data);
    });
  }, []);
  return (
    <div className="flex flex-col py-20 items-center h-screen bg-[#EFF0F4] text-gray-900">
      <h1 className="text-3xl font-bold mb-4 underline">Category List</h1>

      <Modal title="Tambah Kategori">
        <FormCategory />
      </Modal>
      <table className="table bg-white w-1/3 my-3">
        <thead>
          <tr className="text-black text-lg">
            <th>No</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody className="font-semibold">
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
