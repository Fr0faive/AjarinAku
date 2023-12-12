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

  const getUserName = (id) => {
    const user = userData.find((author) => author.user_id === id);
    console.log(user);
    return user.firstName + " " + user.lastName;
  };

  const getCategoryName = (id) => {
    const category = categoryData.find((article) => article.category_id === id);
    console.log(category);
    return category.category_name;
  };

  // Persiapan data yang rapihnya
  // const [dataArticle, setDataArticle] = useState([]);
  // const [userData, setUserData] = useState({});
  // const [categoryData, setCategoryData] = useState({});

  // useEffect(() => {
  //   // Fetch articles
  //   articleService.getArticles((data) => {
  //     setDataArticle(data);

  //     // Fetch user data
  //     const userIds = data.map((article) => article.userId);
  //     userService.getUserById(userIds, (users) => {
  //       const userMap = {};
  //       users.forEach((user) => {
  //         userMap[user.id] = user.name;
  //       });
  //       setUserData(userMap);
  //     });

  //     // Fetch category data
  //     const categoryIds = data.map((article) => article.categoryId);
  //     categoryService.getCategory(categoryIds, (categories) => {
  //       const categoryMap = {};
  //       categories.forEach((category) => {
  //         categoryMap[category.id] = category.name;
  //       });
  //       setCategoryData(categoryMap);
  //     });
  //   });
  // }, []);
  // const [articles, setArticles] = useState([]);
  // const [users, setUsers] = useState([]);

  // console.log(articles);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch articles

  //       await articleService.getArticles((data) => {
  //         setArticles(data);
  //       });

  //       // Extract user and category IDs
  //       const userIds = articles.map((article) => article.userId);
  //       const categoryIds = articles.map((article) => article.categoryId);
  //       console.log(userIds);
  //       // Fetch user data
  //       await userService.getUserById(userIds, (users) => {
  //         setUsers(users);
  //       });
  //       const userMap = {};
  //       users.forEach((user) => {
  //         userMap[user.user_id] = user.username;
  //       });
  //       setUserData(userMap);

  //       // Fetch category data
  //       const categories = await categoryService.getCategory(categoryIds);
  //       const categoryMap = {};
  //       categories.forEach((category) => {
  //         categoryMap[category.category_id] = category.category_name;
  //       });
  //       setCategoryData(categoryMap);

  //       // Set article data
  //       setDataArticle(articles);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

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
                <td>{getUserName(data.userId)}</td>
                <td>{getCategoryName(data.categoryId)}</td>
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
