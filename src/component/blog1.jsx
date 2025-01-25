import CardBlog from "../cards/cardblog";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../cards/footer";
import Loader from "../cards/loader";

export default function Blog1() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/pizzablogdata.json")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          setBlogs([]);
          console.error("Unexpected response format:", response.data);
        }
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blog data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="h-[72vh] flex justify-center items-center" >
      <Loader/>
    </div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-3 w-full bg-red-50 p-2">
        {blogs.length > 0 ? (
          blogs.map((item, index) => (
            <div key={index}>
              <CardBlog image={item.image} content={item.content} />
            </div>
          ))
        ) : (
          <div className="text-center col-span-3 text-gray-500">
            No blog posts available.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
