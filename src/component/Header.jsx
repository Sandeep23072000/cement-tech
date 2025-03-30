import "../style/Header.css";

const Header = () => {
  return (
    <nav className="bg-theme text-theme-text w-full h-20">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto flex-col sm:flex-row px-2 sm:px-0">
        <a className="text-4xl sm:text-left font-bold tracking-widest" href="#">PST</a>
        <div className="sm:flex hidden h-full items-center font-medium flex-wrap">
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#">Home</a>
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#about">About Products</a>
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#mission">Our Mission</a>
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#vision" >Our Vision</a>
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#contact">Contact</a>
          <a className="hover:bg-theme-foreground-600 h-full px-3 duration-150 flex items-center" href="#testimonials">Testimonials</a>
        </div>

      </div>
    </nav>
  );
};

export default Header;
