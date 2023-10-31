import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/Product/Products";
import { ProductDetail } from "./pages/Product/ProductDetail";
import { ProductsPageLayout } from "./components/Layout/ProductsLayout";
import { Profile } from "./pages/Profile/Profile";
import { Cart } from "./pages/Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  console.log(isAuthenticated)

  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsPageLayout />}>
            <Route index element={<ProductsPage />} />
          </Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
