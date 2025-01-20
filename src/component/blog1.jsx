import CardBlog from "../cards/cardblog";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../cards/footer";

export default function Blog1() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get("/Blogdata.json").then((response) => {
      setdata(response.data);
      setloading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
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
