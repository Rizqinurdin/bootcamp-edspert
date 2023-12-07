import { Routes, Route } from "react-router-dom"
import NavBarComponent from "./component/NavBarComponent"
import HomePage from "./pages/HomePage"
import FooterComponent from "./component/FooterComponent"
import ProductDetail from "./pages/ProductDetail"
import ProductCatalog from "./pages/ProductCatalog"
import PaymentCheckout from "./pages/PaymentCheckout"



function App() {

  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/productDetail" Component={ProductDetail} />
        <Route path="/productCatalog" Component={ProductCatalog} />
        <Route path="/paymentCheckout" Component={PaymentCheckout} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
