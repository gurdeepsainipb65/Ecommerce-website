import Item from "./item";
import Buy from "./buycard";
import Best from "./best";
import Footer from "../cards/footer";
import Blogs from "./blogs";

export default function Home() {
  return (
    <div>
      <Item />
      <Buy />
      <Best />
      <Footer />
    </div>
  );
}
