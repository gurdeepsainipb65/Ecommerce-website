import Nav from "./component/navbar";
import Home from "./component/home";
import Shop1 from "./component/Shop1";
import ProductDetail from "./cards/ProductDetail";
import Blogs from "./component/blogs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Aboutus from "./component/aboutus";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/shop" element={<Shop1 />} />
          <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
