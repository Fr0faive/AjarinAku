import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import articleService from "../services/article.service";
import userService from "../services/user.service";

const Article = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState({});
  const [userName, setUserName] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    articleService.getDetailsArticles(id, (data) => {
      setArticles(data);
    });
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        await userService.getUserById(articles.userId, (data) => {
          setUserName(data.firstName + " " + data.lastName);
          // console.log(data);
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (articles.userId) {
      fetchUserName();
    }
  }, [articles.userId]);
  useEffect(() => {
    if (articles.created_at) {
      const date = new Date(articles.created_at);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDateString = date.toLocaleDateString("id-ID", options);
      setFormattedDate(formattedDateString);
    }
  }, [articles.created_at]);
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pt-[120px] bg-[#EFF0F4] pb-14">
        <div className="w-4/5 ml-10">
          <div className="grid h-full py-5 card bg-white rounded-box px-5">
            <h1 className="uppercase text-black font-medium text-[40px] text-start mb-2">
              {articles.title}
            </h1>
            <div className="flex flex-row justify-between">
              <div>
                <span className="text-black text-sm">
                  Organized by: <span className="font-bold">{userName}</span>
                </span>
                <br />
                <span className="text-black text-sm">
                  Dipublish pada{" "}
                  <span className="font-bold">{formattedDate}</span>
                </span>
              </div>
              <button
                type="button"
                className="btn btn-sm text-white bg-red-500 border-none hover:bg-red-600"
              >
                Download PDF
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid h-full px-5 py-5 card bg-white rounded-box text-black">
            <div dangerouslySetInnerHTML={{ __html: articles.content }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
