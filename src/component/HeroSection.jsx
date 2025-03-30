import PSTLogo from "./PSTLogo";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "../Shared/Button";

export default function HeroSection() {
  return (
    <div className="flex flex-col sm:min-h-dvh relative">
      <header className="sticky sm:block hidden top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
        <div className="px-4 lg:px-6 max-w-7xl mx-auto h-20 flex items-center sticky top-0 z-50 w-full">
          <Link href="#" className="flex items-center justify-center">
            <div ><PSTLogo/></div>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About Products
            </a>

            <a
              href="#mission"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Our Mission
            </a>
            <a
              href="#vision"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Our Vision
            </a>
            <a
              href="#testimonial"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Reference
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          
          </nav>
        </div>
      </header>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        autoPlay
        className="h-full"
        infiniteLoop
        interval={5500}
        transitionTime={1000}
      >
        <div className="relative max-h-screen overflow-hidden">
          <img src="/machine-mobile-inspection.jpg" />
          <div className="w-full h-full bg-gradient-to-t from-theme to-theme/10 flex items-center justify-center absolute top-0">
            <div className="rounded w-1/2 h-1/2 max-sm:w-full max-sm:h-full max-sm:px-2 max-sm:pb-3 justify-center max-sm:items-end flex flex-col max-sm:flex-row gap-3 items-center">
              <p className="sm:text-5xl max-sm:text-md max-sm:text-left text-white font-bold max-sm:w-full">
                {"India's"} first make in india technical multi-functional and
                customised app for O&M support.
              </p>
              <Button className="max-sm:bg-transparent max-sm:p-0 max-sm:w-4/6 max-sm:border max-sm:border-theme-foreground-500">
                <a href="#first-in-india">Read More</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative max-h-screen overflow-hidden">
          <img src="/inspection-02.webp" />
          <div className="w-full h-full bg-gradient-to-t from-theme to-theme/10 flex items-center justify-center absolute top-0">
            <div className="rounded w-1/2 h-1/2 max-sm:w-full max-sm:h-full max-sm:px-2 max-sm:pb-3 justify-center max-sm:items-end flex flex-col max-sm:flex-row gap-3 items-center">
              <p className="sm:text-5xl max-sm:text-md max-sm:text-left text-white font-bold max-sm:w-full">
                Unlock the Power of MI, RR, and OR.
              </p>
              <Button className="max-sm:bg-transparent max-sm:p-0 max-sm:w-4/6 max-sm:border max-sm:border-theme-foreground-500">
                <a href="#about">Read More</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative max-h-screen overflow-hidden">
          <img src="/inspection-03.webp" />
          <div className="w-full h-full bg-gradient-to-t from-theme to-theme/10 flex items-center justify-center absolute top-0">
            <div className="rounded w-1/2 h-1/2 max-sm:w-full max-sm:h-full max-sm:px-2 max-sm:pb-3 justify-center max-sm:items-end flex flex-col max-sm:flex-row gap-3 items-center">
              <p className="sm:text-5xl max-sm:text-md max-sm:text-left text-white font-bold max-sm:w-full">
                Empowering the Cement Industry through Transformative Technology
              </p>
              <Button className="max-sm:bg-transparent max-sm:p-0 max-sm:w-4/6 max-sm:border max-sm:border-theme-foreground-500">
                <a href="#mission">Read More</a>
              </Button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
