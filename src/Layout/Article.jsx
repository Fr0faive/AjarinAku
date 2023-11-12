const Article = () => {
  return (
    <>
      <div className="flex flex-col w-full pt-[120px] bg-[#EFF0F4] pb-14">
        <div className="w-4/6 ml-10">
          <div className="grid h-full py-5 card bg-white rounded-box px-5">
            <h1 className="uppercase text-black font-bold mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              voluptatibus animi dolor illum ullam voluptate quia iusto ipsum
              saepe aliquid?
            </h1>
            <div className="flex flex-row justify-between">
              <span className="text-black text-sm">
                Organized by: Author, 6 November 2023
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              accusamus possimus qui error quaerat ipsum necessitatibus ea at
              distinctio officia quibusdam quae, praesentium nobis quasi quam,
              autem cum, odio eius iusto ipsam accusantium. Consequatur expedita
              vitae at illo et, vel, eos vero suscipit tempore itaque eius
              ducimus ut omnis est sed excepturi laudantium ratione repudiandae?
              Repellat, saepe labore id numquam, reprehenderit facere quod fuga
              debitis aliquid possimus nisi consequatur beatae ullam ab iusto
              repudiandae eligendi, quaerat rerum dicta deserunt repellendus.
              Magni, earum odio. Voluptate nesciunt quis blanditiis eligendi
              voluptates accusantium commodi? Adipisci velit vero maxime dolor
              officiis quisquam, quo aut.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
