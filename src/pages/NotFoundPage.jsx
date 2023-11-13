import NavigationBar from "../Layout/NavigationBar";
import Footer from "../Layout/Footer";

const NotFoundPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col justify-center items-center h-screen bg-[#EFF0F4] text-biruTua">
        <h1 className="text-4xl font-bold md:text-9xl md:font-extrabold">
          404 NOT FOUND
        </h1>
        <p className="text-2xl font-semibold md:text-6xl md:font-bold">
          The page you are looking for does not exist
        </p>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
