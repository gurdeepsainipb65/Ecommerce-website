import Contactcard from "../cards/contactcard";
import Loader from "../cards/loader";
import { useState } from "react";
export default function Contact() {
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
      <Contactcard />
    </div>
  );
}
