import { useEffect, useState } from "react";
import { getAllCategory } from "../services/category.service";

const Select = () => {
  const [dataOption, setDataOption] = useState([]);
  console.log(dataOption);

  useEffect(() => {
    getAllCategory((data) => {
      setDataOption(data);
    });
  }, []);
  return (
    <select className="select select-info w-full text-gray-900 bg-white max-w-xs">
      <option disabled selected>
        Pilih kategori
      </option>
      {dataOption.map((option) => (
        <option
          className="text-black"
          key={option.category_id}
          value={option.category_name}
        >
          {option.category_name}
        </option>
      ))}
    </select>
  );
};

export default Select;
