import ArticleContent from "../Layout/ArticleContent";
import ArticleSide from "../Layout/ArticleSide";
import Footer from "../Layout/Footer";
import NavigationBar from "../Layout/NavigationBar";

const ArticlePage = () => {
  return (
    <>
      <NavigationBar position="fixed" />
      <div className="flex flex-row gap-2 bg-[#EFF0F4] pb-14">
        <div className="w-3/4">
          <ArticleContent />
        </div>
        <div className="w-1/4 pt-[120px]">
          <ArticleSide />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticlePage;
