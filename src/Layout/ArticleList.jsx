import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../services/article.service";

const dataArticle = [
  {
    id: 1,
    title: "Article 1",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Article 2",
    image: "https://picsum.photos/200/300",
  },
];
const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles((data) => {
      setArticles(data);
    });
    // setArticles(dataArticle);
  });
  return (
    <div className="min-h-screen bg-[#EFF0F4] relative isolate px-6 pt-14 lg:px-8 flex">
      <div className="w-4/6">
        <div className="ml-48 pt-28">
          <div className="flex flex-row justify-between">
            <span className="text-gray-900 text-[26px] font-medium leading-[39px]">
              Recommended
            </span>
            <Link
              to={"/"}
              className="text-biruTua font-medium text-lg leading-7"
            >
              See more...
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 my-[19px]">
            {articles.map((article) => (
              <div className="card w-[180px] bg-white shadow-xl">
                <figure>
                  <img src={article.image} alt="Shoes" className="w-1/2 m-6" />
                </figure>
                <div className="card-body">
                  <h2 className="font-medium text-sm flex items-center gap-2">
                    {article.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="text-xs">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4">Category</div>
    </div>
  );
};

export default ArticleList;
