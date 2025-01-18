import { useState } from "react";
import { useEffect } from "react";
import Carddb from "../cards/cardb";
import axios from "axios";
export default function Best() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/pizzadata.json").then((response) => {
      setdata(response.data);
    });
  }, []);
  return (
    <div className="mb-16">
      <div className="w-full flex text-4xl p-8 text-red-700 font-extrabold justify-center items-center">
        MOST ORDER PIZZAS
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-2 container mx-auto">
        {data &&
          data.map(
            (item, index) =>
              index < 4 && (
                <Carddb key={index} image={item.image} name={item.name} />
              )
          )}
      </div>
    </div>
  );
}
