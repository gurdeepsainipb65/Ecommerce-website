import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CheifCard from "../cards/chef";
import TestimonialSection from "../cards/testimonial";
import Footer from "../cards/footer";

export default function Aboutus() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/chef.json").then((response) => {
      setdata(response.data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      <div className="w-full flex text-4xl p-8 text-red-700 font-extrabold justify-center items-center">
        Meet Our Expert Chefe
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="grid grid-cols-1 lg:grid-cols-3 mx-auto container gap-14 p-5"
      >
        {data.map((item, index) => (
          <CheifCard
            key={index}
            image={item.image}
            name={item.name}
            title={item.title}
          />
        ))}
      </div>
      <div>
        <TestimonialSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
