import Header from "./Header";
import "../style/HomeMainPage.css";
import Button from "../Shared/Button";

const HomeMainPage = () => {
  return (
    <div className="header" id="home-scroll">
      <div className="position-absolute w-100 z-20">
        <Header />
      </div>
      <div className="absolute w-full h-full flex items-center z-0 bg-[url('../src/assets/build-inspection.png')] bg-theme-background-500 bg-blend-multiply" >
        <div className="w-full mx-auto sm:px-0 px-2 items-center flex flex-col gap-4">
          <p className="sm:text-5xl text-3xl sm:max-w-3xl font-bold text-center">
            Creating a delightful Customer experience.
          </p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeMainPage;
