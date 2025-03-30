import React from "react";
import marutiLogo from "../assets/maruti-logo.png";
import tansenCement from "../assets/tansen-cement.png";
import sarbottamCement from "../assets/sarbottam-cement.png";
import sonapurCement from "../assets/sonapur-cement.png";
import tajCement from "../assets/taj-cement.png";
import tajDhalai from "../assets/taj-dhalai-cement.png";
import newcustomers from "../assets/NewCustomers.png";
import existCustomer from "../assets/ExistCustomer.png";
import Button from "../Shared/Button";

const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-white p-8 relative">
      {/* Title */}
      <h2 className="text-red-600 font-bold text-2xl mb-4">Refrences-</h2>

      {/* Nepal Cement Industry */}
      <div className="mb-12">
        <h3 className="text-blue-600 font-bold text-xl mb-4">
          Presentation on MIRROR app conducted in below cement industries of Nepal -
        </h3>
        <div className="text-gray-700 text-lg">
        
          <p className="max-w-[700px] text-theme-background-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Maruti cement limited, Chandraudaypur, Nepal.</p>
          <p className="max-w-[700px] text-theme-background-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Sonapur minerals & oil limited, Nepal.</p>
          <p className="max-w-[700px] text-theme-background-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Palpa cement limited, Nepal.</p>
          <p className="max-w-[700px] text-theme-background-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Sarbottam cement limited, Nepal.</p>
          
          
          <img src={newcustomers} alt="newcustomers" />
        </div>
      </div>

      {/* Indian Cement Industry */}
      <div>
        <h3 className="text-blue-600 font-bold text-xl mb-4">
          Our first customer in Indian cement industry -
        </h3>
        <p className="text-gray-700 text-lg">Hills Cement Company Limited, Meghalaya.</p>
        <img src={existCustomer} alt="existCustomer" />
      </div>

      {/* Images in scattered format (absolute positioning) */}
      
    </section>
  );
};

export default Testimonials;
