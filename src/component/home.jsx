import Item from "./item";
import Buy from "./buycard";
import Best from "./best";
import Footer from "../cards/footer";

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
