import { Link } from "react-router-dom";

export const Card = () => {
  const cardButton = [
    {
      id: 1,
      name: "Recently Added",
      href: "/explore",
      src: "/assets/IconRecent.png",
    },
    {
      id: 2,
      name: "Recommended",
      href: "/explore",
      src: "/assets/IconRecommended.png",
    },
    {
      id: 3,
      name: "Biology",
      href: "/explore",
      src: "/assets/IconBio.png",
    },
    {
      id: 4,
      name: "Chemistry",
      href: "/explore",
      src: "/assets/IconChem.png",
    },
    {
      id: 5,
      name: "Mathematics",
      href: "/explore",
      src: "/assets/IconMath.png",
    },
    {
      id: 6,
      name: "Computer Science",
      href: "/explore",
      src: "/assets/IconCompsci.png",
    },
    {
      id: 7,
      name: "Sports",
      href: "/explore",
      src: "/assets/IconSport.png",
    },
    {
      id: 8,
      name: "Health",
      href: "/explore",
      src: "/assets/IconHealth.png",
    },
    {
      id: 9,
      name: "Economy & Business",
      href: "/explore",
      src: "/assets/IconEco.png",
    },
  ];
  return (
    <>
      {cardButton.map((card) => (
        <Link to={card.href} key={card.id}>
          <div className="card card-side bg-slate-200 shadow-xl w-64 h-10 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:shadow-sky-200">
            <figure className="bg-biruTua p-2 rounded-tl-lg rounded-bl-lg">
              <img src={card.src} />
            </figure>
            <div className="card-body w-52">
              <h2 className="card-title text-sm text-black -mt-5 -ml-5">
                {card.name}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
