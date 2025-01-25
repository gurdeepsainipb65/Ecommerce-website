import Buycard from "./buycard";
import Footer from "../cards/footer";
import { useState } from "react";
import Loader from "../cards/loader";
export default function Shop1() {
  const [loading, setloading] = useState(true);
  setTimeout(() => {
    setloading(false);
  }, 1000);

  if (loading) {
    return (
      <div className="h-[72vh] flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Buycard />
      <Footer />
    </div>
  );
}
