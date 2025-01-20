import CardBlog from "../cards/cardblog";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../cards/footer";

export default function Blog1() {
  const [blogs, setblogs] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios.get("/Blogdata.json").then((response) => {
      setblogs(response.data || []);
      setloading(false);
    });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full p-2">
        {blogs.map((item, index) => (
          <CardBlog key={index} image={item.image} content={item.content} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
