import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";

function App() {
  

  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
