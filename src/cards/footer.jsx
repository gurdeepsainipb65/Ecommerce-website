import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
      className="bg-gray-900"
    >
      <div className=" p-2 font-bold container mx-auto">
        <div className="bg-[#fc791a] rounded-xl text-white py-6 flex flex-col gap-8 justify-center lg:flex lg:flex-row lg:justify-around items-center my-20">
          {/* Address Section */}
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white text-orange-500  rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16.884 8.178A6.1 6.1 0 0117.5 10c0 3.6-6 10.5-6 10.5S5.5 13.6 5.5 10a6.1 6.1 0 01.616-2.822M12 10a2 2 0 110-4 2 2 0 010 4z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Address</p>
              <p>4648 Rocky Road</p>
              <p>Philadelphia</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex justify-center items-center space-x-4 ">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12H8m8-4H8m12 8a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h12z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Send Email</p>
              <p>info@example.com</p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex justify-center items-center space-x-4">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h11M9 21l6-10-6-10"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">Call Emergency</p>
              <p>+88 0123 654 99</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-full text-white">
          <div>
            <ul className="flex flex-col gap-10">
              <li>
                <img src="\image\logoWhite.svg" alt="fresheat respondent" />
              </li>
              <li>
                The fringes of the cosmos have their own order and measure, just
                like time has its seasons
              </li>
              <li className="flex gap-4">
                <img className="h-6 w-6" src="/image/fb.svg" alt="Facebook" />
                <img
                  className="h-6 w-6"
                  src="/image/insta.svg"
                  alt="Instagram"
                />
                <img
                  className="h-6 w-6"
                  src="/image/youtube.svg"
                  alt="YouTube"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl">Quick Links</h1>
            <Link to="/" className="hover:text-orange-500">
              HOME +
            </Link>
            <Link to="/aboutus" className="hover:text-orange-500">
              ABOUT US +
            </Link>
            <Link to="/shop" className="hover:text-orange-500">
              SHOP +
            </Link>
            <Link to="/blog" className="hover:text-orange-500">
              BLOGS +
            </Link>
            <Link to="/contactus" className="hover:text-orange-500">
              CONTACT US +
            </Link>
          </div>

          <ul className="flex flex-col gap-4">
            <li className="text-xl">Our Timing</li>
            <li>
              <span>Monday to friday</span>
              <span className="text-orange-500">: 8am to 4pm</span>
            </li>
            <li>
              <span>Saturday</span>{" "}
              <span className="text-orange-500">: 8am to 12am</span>
            </li>
          </ul>
          <div>
            <img src="\image\footer.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
