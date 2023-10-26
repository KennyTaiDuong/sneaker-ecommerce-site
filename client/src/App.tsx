import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/Product/Products";
import { ProductDetail } from "./pages/Product/ProductDetail";
import { ProductsPageLayout } from "./components/Layout/ProductsLayout";

function App() {
  

  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="products" element={<ProductsPageLayout />}>
            <Route index element={<ProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
