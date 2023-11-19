import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsArticles } from "../services/article.service";

const Article = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState({});
  useEffect(() => {
    getDetailsArticles(
      id,
      (data) => {
        setArticles(data);
      },
      [id]
    );
  });
  console.log(articles);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pt-[120px] bg-[#EFF0F4] pb-14">
        <div className="w-4/5 ml-10">
          <div className="grid h-full py-5 card bg-white rounded-box px-5">
            <h1 className="uppercase text-black font-medium text-[40px] text-start mb-2">
              {articles.title}
            </h1>
            <div className="flex flex-row justify-between">
              <span className="text-black text-sm">
                Organized by: {articles.category}, ipsum., Lorem.
              </span>
              <button
                type="button"
                className="btn btn-sm text-white bg-red-500 border-none hover:bg-red-600"
              >
                Download PDF
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid h-full px-5 py-5 card bg-white rounded-box place-items-center text-sm text-black">
            <p>{articles.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
