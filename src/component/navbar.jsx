import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [menu, setmenu] = useState(false);
  function Toggle() {
    setmenu(!menu);
  }
  return (
    <div className="flex flex-col lg:flex-row w-full h-auto">
      {/* Logo Section */}
      <div className=" hidden w-full lg:w-1/5 lg:flex justify-center lg:justify-start">
        <img
          className="p-4 m-4 max-w-[150px] lg:max-w-full"
          src="/image/logo.svg"
          alt="Logo"
        />
      </div>

      {/* Main Content */}
      <div className="w-full text-white bg-black">
        {/* Top Banner: Opening times & social media links */}
        <div className="flex flex-wrap justify-between items-center h-auto px-4 sm:px-6 lg:px-10 p-2 bg-red-600 text-xs sm:text-sm lg:text-base">
          <div className="w-full sm:w-auto text-center sm:text-left">
            Exact opening times: 09:00 am - 06:00 pm
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto mt-2 sm:mt-0">
            <div>Follow us:</div>
            <img className="h-6 w-6" src="/image/fb.svg" alt="Facebook" />
            <img className="h-6 w-6" src="/image/insta.svg" alt="Instagram" />
            <img className="h-6 w-6" src="/image/youtube.svg" alt="YouTube" />
          </div>
        </div>

        {/* Navbar Section */}
        <div className="bg-gray-900">
          <nav>
            <ul className=" bg-black flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 font-bold text-sm sm:text-base lg:text-lg space-y-4 lg:space-y-0">
              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-10">
                <Link to="/" className="hover:text-red-600">
                  <li>HOME +</li>
                </Link>
                <Link to="/aboutus" className="hover:text-red-600">
                  <li>ABOUT US +</li>
                </Link>
                <Link to="/shop" className="hover:text-red-600">
                  <li>SHOP +</li>
                </Link>
                <Link to="/blog" className="hover:text-red-600">
                  <li>BLOGS +</li>
                </Link>
                <Link to="/contactus" className="hover:text-red-600">
                  <li>CONTACT US +</li>
                </Link>
                <Link to="/cart">
                  <img
                    className="h-14 w-16"
                    src="\image\delivery.png"
                    alt="delhivery"
                  />
                </Link>

                <Link to="/cart">
                  <img className="h-8 w-8" src="\image\cart.svg" alt="cart" />
                </Link>
              </div>

              {/* Hamburger Button for Mobile */}
              <div className="flex justify-between items-center gap-14 lg:hidden">
                <button onClick={Toggle}>
                  <img className="h-8 w-8" src="/image/menu.svg" alt="Menu" />
                </button>
                <img src="\image\logoWhite.svg" alt="" />
                <Link to="/cart">
                  <img className="h-8 w-8" src="\image\cart.svg" alt="cart" />
                </Link>
              </div>

              {/* Mobile Navigation Links (Initially Hidden) */}
              <div className={`${menu ? "block" : "hidden"} lg:hidden w-full`}>
                <ul className="flex flex-col items-center space-y-4">
                  <Link to="/" className="hover:text-red-600">
                    <li>Home +</li>
                  </Link>
                  <Link to="/aboutus" className="hover:text-red-600">
                    <li>About Us +</li>
                  </Link>
                  <Link to="/shop" className="hover:text-red-600">
                    <li>Shop +</li>
                  </Link>
                  <Link to="/blog" className="hover:text-red-600">
                    <li>BLOGS +</li>
                  </Link>
                  <Link to="/contactus" className="hover:text-red-600">
                    <li>CONTACT US +</li>
                  </Link>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
