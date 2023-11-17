import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Products } from "./pages/Product/Products";
import { ProductDetail } from "./pages/Product/ProductDetail";
import { ProductsLayout } from "./components/Layout/ProductsLayout";
import { Profile } from "./pages/Profile/Profile";
import { Cart } from "./pages/Cart/Cart";
import { Completion } from "./components/Checkout/Completion";

function App() {
  
  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsLayout />}>
            <Route index element={<Products />} />
          </Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="completion" element={<Completion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
