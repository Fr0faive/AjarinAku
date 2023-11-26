import Hero from "../Layout/Hero";
import NavigationBar from "../Layout/NavigationBar";
import Footer from "../Layout/Footer";
const HomePage = () => {
  return (
    <>
      <NavigationBar position="fixed" />
      <Hero />
      <Footer />
    </>
  );
};

export default HomePage;
