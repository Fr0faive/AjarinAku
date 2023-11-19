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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quasi aspernatur possimus nihil enim animi? Iure
              aperiam, enim ad beatae ipsa adipisci eum, pariatur quis, voluptas
              blanditiis assumenda voluptate! Necessitatibus id vel laborum non
              voluptate, itaque, dicta qui aut fuga molestias nesciunt
              recusandae? Numquam ratione quo illum, amet doloremque dolores,
              dicta velit, deserunt ipsa accusantium adipisci facere odit quas?
              Suscipit, magnam voluptatum exercitationem, odio quaerat corrupti
              iste facilis reiciendis recusandae sit non dolore nam excepturi
              maxime illo sed aspernatur totam nisi vitae consequatur pariatur
              molestiae. Ipsa at quisquam ut animi labore cum iste dolores ullam
              ducimus tempora ea distinctio maiores asperiores harum sapiente
              nihil non maxime, doloremque corporis sequi facere doloribus
              iusto, quidem iure. Mollitia architecto sunt optio ad magnam nisi
              qui possimus minus asperiores, nesciunt accusantium atque
              reprehenderit excepturi aspernatur deleniti, ea consectetur
              perferendis commodi unde voluptatibus iusto eum. Officiis atque
              eum enim saepe pariatur hic quidem, quae dolore cupiditate.
              Expedita explicabo minus dignissimos nesciunt debitis dolor nemo
              eos! Odio suscipit repellat recusandae eius? Rem necessitatibus
              perferendis modi porro architecto laudantium officiis atque?
              Exercitationem ducimus odit dolor dolore voluptatem sed quis
              placeat optio eaque rem laborum debitis consequatur tenetur
              voluptates quisquam reiciendis soluta quia id magnam quo,
              asperiores dolores aliquam? Aliquid eveniet maxime quaerat aperiam
              nobis deserunt voluptatibus dicta fuga illum non eos voluptates
              similique fugiat id quidem, ad impedit! Consequatur minus, ut,
              incidunt blanditiis iure ipsum dicta quas atque aperiam tempore
              harum, deleniti et omnis voluptatum expedita nesciunt delectus.
              Fugit rem doloribus assumenda asperiores. Vel natus eius aliquid.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
