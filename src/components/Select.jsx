import { useEffect, useState } from "react";
import { getAllCategory } from "../services/category.service";

const Select = (props) => {
  const [dataOption, setDataOption] = useState([]);
  console.log(dataOption);
  const { onChange } = props;
  useEffect(() => {
    getAllCategory((data) => {
      setDataOption(data);
    });
  }, []);
  return (
    <select
      className="select select-info w-full text-gray-900 bg-white max-w-xs"
      onChange={onChange}
    >
      <option disabled selected>
        Pilih kategori
      </option>
      {dataOption.map((option) => (
        <option
          className="text-black"
          key={option.category_id}
          value={option.category_id}
        >
          {option.category_name}
        </option>
      ))}
    </select>
  );
};

export default Select;
