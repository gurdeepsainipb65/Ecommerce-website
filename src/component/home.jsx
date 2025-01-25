import Item from "./item";
import Buy from "./buycard";
import Best from "./best";
import Footer from "../cards/footer";
import Loader from "../cards/loader";
import { useState } from "react";
export default function Home() {
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
      <Item />
      <Buy />
      <Best />
      <Footer />
    </div>
  );
}
