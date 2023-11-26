import ArticleList from "../Layout/ArticleList";
import Footer from "../Layout/Footer";
import NavigationBar from "../Layout/NavigationBar";

const LandingPage = () => {
  return (
    <>
      <NavigationBar position="fixed" />
      <ArticleList />
      <Footer />
    </>
  );
};

export default LandingPage;
