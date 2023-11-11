export const Card = () => {
  return (
    <div className="card card-side bg-slate-200 shadow-xl w-52 h-10">
      <figure className="bg-biruTua p-2">
        <img
          src="/public/assets/IconRecent.png"
          alt="Recently Added"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">Recently Added</h2>
      </div>
    </div>
  );
};
