import Nav from "./component/navbar";
import Contact from "./component/contact";
import React from "react";
import Home from "./component/home";
import Shop1 from "./component/Shop1";
import ProductDetail from "./cards/ProductDetail";
import Blog1 from "./component/blog1";
import Cart from "./component/Cart";
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
          <Route path="/shop" element={<Shop1 />}></Route>
          <Route path="/productdetail/:id" element={<ProductDetail />}></Route>
          <Route path="/blog" element={<Blog1 />}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
