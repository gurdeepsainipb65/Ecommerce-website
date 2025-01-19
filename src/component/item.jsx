import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Item() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("/pizzadata.json")
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pizza data:", error);
      });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper flex items-center justify-center w-full h-[40vh] lg:h-[90vh]"
      >
        {data.map(
          (item, index) =>
            index <= 5 && ( // Directly use the condition here
              <SwiperSlide
                key={index}
                className="h-full w-full flex justify-center items-center -mt-10"
              >
                <img
                  className="h-full w-full object-contain lg:object-cover"
                  src={item.image}
                  alt={`Pizza ${index + 1}`}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
