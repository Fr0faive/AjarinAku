import { useState, useEffect } from "react";
import { getArticles } from "../services/article.service";

const DashContent = () => {
  const dataDisplay = [
    {
      title: "Total Books",
      value: "20",
      image: "./assets/book.png",
    },
    {
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
      <div className="pt-24 pl-24">
        <div className="flex flex-col gap-32">
          <h1 className="font-semibold text-black text-4xl">Welcome, Admin!</h1>
          <div className="flex flex-wrap justify-around gap-5 items-center">
            {dataDisplay.map((data) => (
              <div className="indicator">
                <span className="indicator-item right-24">
                  <img src={data.image} />
                </span>
                <div className="flex flex-col gap-5 p-9 justify-center w-[449px] h-[190px] bg-white">
                  <h1 className="text-black font-normal text-4xl">
                    {data.title}
                  </h1>
                  <h1 className="text-[#00419E] font-medium text-4xl">
                    {data.value}
                  </h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mx-24 gap-5">
            <h1 className="text-black font-medium text-2xl">Recent Article</h1>
            <div className="flex flex-wrap gap-5">
              {articles.slice(0, 5).map((article) => (
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
