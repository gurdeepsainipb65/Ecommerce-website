import CardBlog from "../cards/cardblog";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../cards/footer";
import { useParams } from "react-router-dom";

export default function Blog1() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/Blogdata.json").then((response) => {
      setdata(response.data);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full p-2">
        {data.map((item, index) => (
          <CardBlog key={index} image={item.image} content={item.content} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
