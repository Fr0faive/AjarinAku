import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import articleService from "../services/article.service";
// import { ButtonP } from "../component/Button";
import { Card } from "../components/Card";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    articleService.getArticles((data) => {
      setArticles(data);
    });
    // setArticles(dataArticle);
  }, []);
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
              className="text-biruTua font-medium text-lg leading-7 mr-4"
            >
              See more...
            </Link>
          </div>
          <div className="flex flex-wrap gap-[22px] my-[19px]">
            {articles.slice(0, 10).map((article) => (
              <Link
                to={`/explore/article/${article.article_id}`}
                key={article.article_id}
                title="Hallo"
              >
                <div className="card w-[180px] max-h-56 bg-white shadow-xl overflow-hidden">
                  <figure className="h-full">
                    <img
                      src={article.image}
                      alt="Shoes"
                      className="w-full m-6"
                    />
                  </figure>
                  <div className="card-body h-full p-5">
                    <div className="badge badge-secondary">NEW</div>
                    <h2 className="text-black font-medium text-xs flex items-center gap-2">
                      {article.title.substring(0, 20)}...
                    </h2>
                    <p className="text-xs text-slate-500 h-1/3">
                      {article.description.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="pt-[110px] px-10">
          <h2 className="text-gray-900 text-[26px] font-medium leading-[39px] mb-5">
            Lessons Filter
          </h2>
          <div className="flex flex-col gap-2 mt-1">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
