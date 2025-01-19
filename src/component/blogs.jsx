import Blogscard from "../cards/blogcard";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../cards/footer";

export default function Blogs() {
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
          <Blogscard key={index} image={item.image} content={item.content} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
