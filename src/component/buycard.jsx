import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../cards/cards";
import axios from "axios";
import { Link } from "react-router-dom";

AOS.init();

export default function Buycard() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get("/pizzadata.json").then((response) => {
      setdata(response.data);
      
      setloading(false)
    });
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="container mx-auto flex flex-col gap-5 py-8">
      <h1 className="text-center text-4xl font-semibold capitalize text-red-500">
        our best pizzas
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} data-aos="fade-up">
            <Link to={`/productdetail/${index}`}>
              <Card
                image={item.image}
                title={item.name}
                description={item.description}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
