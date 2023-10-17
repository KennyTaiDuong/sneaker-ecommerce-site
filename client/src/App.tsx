import { BrowserRouter } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";


function App() {

  return (
    <>
    <BrowserRouter>
      <Global />
      <Layout />
    </BrowserRouter>
    </>
  )
}

export default App
