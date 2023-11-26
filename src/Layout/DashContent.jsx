import { useState, useEffect } from "react";
import { getArticles } from "../services/article.service";

const DashContent = () => {
  const dataDisplay = [
    {
      id: 1,
      title: "Total Articles",
      value: "20",
      image: "./assets/book.png",
    },
    {
      id: 2,
      title: "Total Users",
      value: "20",
      image: "./assets/person.png",
    },
  ];

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles((data) => {
      setArticles(data);
    });
  }, []);
  return (
    <div className="w-full h-screen bg-[#EFF0F4]">
      <div className="pt-10 pl-10">
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-black text-2xl">Welcome, Admin!</h1>
          <div className="flex flex-wrap justify-around gap-5 items-center">
            {dataDisplay.map((data) => (
              <div className="indicator">
                <span className="indicator-item right-10">
                  <img src={data.image} style={{ width: "100px" }} />
                </span>
                <div className="flex flex-col gap-5 p-9 justify-center w-72 h-40 bg-white rounded-lg">
                  <h1 className="text-black font-xl text-2xl -ml-2 font-semibold">
                    {data.title}
                  </h1>
                  <h1 className="text-[#00419E] font-medium text-2xl">
                    {data.value}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mx-24 gap-5">
            <h1 className="text-black font-medium text-2xl">Recent Article</h1>
            <div className="flex flex-wrap gap-5">
              {articles.slice(0, 4).map((article) => (
                <div className="card w-[180px] max-h-56 bg-white shadow-xl overflow-hidden">
                  <figure className="h-1/3">
                    <img
                      src={article.image}
                      alt="Shoes"
                      className="w-1/4 m-6"
                    />
                  </figure>
                  <div className="card-body h-1/3">
                    <div className="badge badge-secondary">NEW</div>
                    <h2 className="text-black font-medium text-xs flex items-center gap-2">
                      {article.title.substring(0, 20)}...
                    </h2>
                    <p className="text-xs text-slate-500 h-1/3">
                      {article.description.substring(0, 20)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashContent;
