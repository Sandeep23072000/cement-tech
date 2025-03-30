// import HomeMainPage from "./HomeMainPage";
import AboutProduct from "./AboutProduct";
// import ContactUs from "./ContactUs";
import Footer from "./Footer";
import OurMission from "./OurMission";
import OurVision2 from "./OurVision-2.0";
import HeroSection from "./HeroSection";
import ContactUs2 from "./ContactUs-2.0";
import Specifications from "./specifications";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      {/* <HomeMainPage /> */}
      <HeroSection />
      <Specifications />
      <AboutProduct />
      <OurMission />
      <OurVision2 />
      <Testimonials />
      <ContactUs2 />
      <Footer />
    </>
  );
};

export default Home;
