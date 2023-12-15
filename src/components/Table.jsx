import EditIcon from "./Icons/EditIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import { useEffect, useState } from "react";
import articleService from "../services/article.service";
import userService from "../services/user.service";
import categoryService from "../services/category.service";

const Table = () => {
  const [dataArticle, setDataArticle] = useState([]);
  const [userData, setUserData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    articleService.getArticles((data) => {
      setDataArticle(data);
    });
  }, []);

  useEffect(() => {
    categoryService.getAllCategory((data) => {
      setCategoryData(data);
    });
  }, []);

  useEffect(() => {
    userService.getAllUsers((data) => {
      setUserData(data);
    });
  }, []);

  const getUsername = (id) => {
    const user = userData.find((user) => user.user_id === id);
    return user?.firstName + " " + user?.lastName;
  };

  const getArticleName = (id) => {
    const category = categoryData.find(
      (category) => category.category_id === id
    );
    return category?.category_name;
  };

  return (
    <>
      <div className="ml-28">
        <table className="table w-5/6 text-black">
          <thead className="text-black text-lg">
            <tr>
              <th>Judul</th>
              <th>Penulis</th>
              <th>Kategori</th>
              <th>Sunting</th>
              <th>Hapus</th>
            </tr>
          </thead>
          {dataArticle.map((data) => (
            <tbody>
              <tr className="text-biruTua">
                <td>{data.title}</td>
                <td>{getUsername(data.userId)}</td>
                <td>{getArticleName(data.categoryId)}</td>
                <td className="text-center">
                  <button>
                    <EditIcon />
                  </button>
                </td>
                <td className="text-center">
                  <button>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
